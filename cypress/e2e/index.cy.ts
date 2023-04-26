var fixtures: Map<string, any>;

describe('Testes sobre cadastro e consulta de Códigos de Endereçamento Postal', () => {
  beforeEach(() => cy.task('truncateCollection'));

  before(() => {
    this.fixtures = new Map<string, any>();

    const fixturesNames: string[] = [
      'validCep'
    ];

    fixturesNames.forEach((fixtureName) => {
      cy.fixture(fixtureName).then((fixture) => {
        this.fixtures.set(fixtureName, fixture);
      });
    });
  });
  
  it('deve salvar um CEP com dados válidos', () => {
    const validCep = this.fixtures.get('validCep');
    
    const requestOptions: Partial<Cypress.RequestOptions> = {
      method: 'POST',
      url: '/ceps',
      body: <Cypress.RequestBody>validCep,
      failOnStatusCode: false
    };

    cy.request(requestOptions)
      .then(({ body, status }) => {
        expect(status).to.equal(201);
        const { mensagem } = body;
        expect(mensagem).to.equal('CEP cadastrado com sucesso');
      });
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