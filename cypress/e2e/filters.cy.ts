describe('Filter tests', () => {
  beforeEach(() => {
    cy.visit('/bars')
  })

  it('Top result should be The Central Bar for Monday 11 o clock', () => {
    cy.get('main section article nav div.justify-end button').click()
    cy.wait(150)
    cy.get('#weekday-select').select('Måndag')
    cy.get('#time-select').select('11')
    cy.get('main section article.flex a div h3').first().should('have.text', 'The Central Bar')
  })

  it('Top result should be Älgen with a Stängt-pill for Monday 11 o clock if Visa även stängda barer', () => {
    cy.get('main section article nav div.justify-end button').click()
    cy.wait(150)
    cy.get('#weekday-select').select('Måndag')
    cy.get('#time-select').select('11')
    cy.get('#show-closed-bars-select').select('Visa även stängda barer')
    cy.get('main section article.flex a div h3').first().should('have.text', 'Älgen')
    cy.get('main section article.flex a div.justify-start')
      .first()
      .should('have.descendants', 'span.rounded-full')
    cy.get('main section article.flex a div span.rounded-full')
      .first()
      .should('have.text', 'Stängt')
  })

  it('Top result should be Dovas for Monday 14 o clock', () => {
    cy.get('main section article nav div.justify-end button').click()
    cy.wait(150)
    cy.get('#weekday-select').select('Måndag')
    cy.get('#time-select').select('14')
    cy.get('main section article.flex a div h3').first().should('have.text', 'Dovas')
  })

  it('Search status text should show correctly', () => {
    cy.get('main section article nav div.justify-end button').click()
    cy.wait(150)
    cy.get('#weekday-select').select('Måndag')
    cy.get('#time-select').select('04')
    cy.get('main section article nav div.border-b span')
      .eq(1)
      .should('have.text', 'Visar barer som är öppna måndagar klockan 04.')
  })
})
