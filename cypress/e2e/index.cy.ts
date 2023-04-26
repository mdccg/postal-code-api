describe('Testes sobre cadastro e consulta de Códigos de Endereçamento Postal', () => {
  before(() => {
    cy.fixture('cepObject').then((cepObject) => { this.cepObject = cepObject; });
  });
  
  it('deve salvar um CEP com dados válidos', () => {
    expect(this.cepObject.cep).to.equal('79200-000');
  });

  it('não deve salvar um CEP com um número de CEP inválido', () => {

  });

  it('não deve salvar um CEP com um logradouro inválido', () => {

  });

  it('deve recuperar o logradouro de um CEP previamente cadastrado', () => {

  });

  it('deve retornar mensagem de não encontrado para um CEP não previamente cadastrado', () => {

  });

  it('não deve recuperar o logradouro de um CEP com formato inválido', () => {

  });

  it('deve recuperar o CEP de um logradouro previamente cadastrado', () => {

  });

  it('deve retornar mensagem de não encontrado para um logradouro não previamente cadastrado', () => {

  });

});