describe('check basic components', () => {
  it('check basic components', () => {
    cy.visit('/');
    cy.get('.status').should('exist');
    cy.get('.board-row').should('have.length', 3);
  })
})