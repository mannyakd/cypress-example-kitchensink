describe('Kitchen test', function () {
  it('Selects options', function () {
    cy.visit('http://localhost:8080');

    cy.contains('get')
			.click();

    cy.contains('cy.get()')
  })
});