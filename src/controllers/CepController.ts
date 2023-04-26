import { Request, Response } from 'express';
import { CepDAO } from './../dao/CepDAO';
import { CepModel } from './../domains/CepModel';

export class CepController {
  private _cepDAO: CepDAO;

  constructor() {
    this._cepDAO = new CepDAO();
  }

  async save(req: Request, res: Response) {
    const { cep: cepString, logradouro } = req.body;

    if (!cepString || typeof cepString !== 'string') {
      return res.status(400).json({ mensagensDeErro: ['Número de CEP inválido'] });
    }
    
    if (!logradouro || typeof logradouro !== 'string') {
      return res.status(400).json({ mensagensDeErro: ['Logradouro inválido'] });
    }
    
    const cepRegExp = new RegExp(/^\d{5}\-\d{3}$/);
    
    if(!cepRegExp.test(cepString)) {
      return res.status(500).json({ mensagem: '' });
    }
    
    const cepExistingObject = await this._cepDAO.findByCep(cepString);
    
    if (cepExistingObject) {
      return res.status(409).json({ mensagensDeErro: ['CEP já cadastrado'] });
    }

    const cepObject = new CepModel({
      cep: cepString,
      logradouro
    });

    await this._cepDAO.save(cepObject);
    res.status(201).json({ mensagem: 'CEP cadastrado com sucesso' });
  }
  
  async findByCep(req: Request, res: Response) {
    const { cep } = req.params;

    if (!cep) {
      return res.status(400).json({ mensagem: 'CEP inválido' });
    }

    const cepExistingObject = await this._cepDAO.findByCep(cep);

    if (!cepExistingObject) {
      return res.status(404).json({ mensagem: 'Logradouro não encontrado' });
    }

    res.json({ endereco: cepExistingObject });
  }

  async findByLogradouro(req: Request, res: Response) {
    const { logradouro } = req.params;
    
    if (!logradouro) {
      return res.status(400).json({ mensagem: 'CEP inválido' });
    }

    const cepExistingObject = await this._cepDAO.findByLogradouro(logradouro);

    if (!cepExistingObject) {
      return res.status(404).json({ mensagem: 'CEP não encontrado' });
    }

    res.json({ endereco: cepExistingObject });
  }
}