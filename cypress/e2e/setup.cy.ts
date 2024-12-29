describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('header nav div a svg title').should('have.text', 'Billig Bärs')
  })
})
