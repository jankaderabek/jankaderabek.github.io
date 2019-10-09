describe('Homepage test', function () {
  it('Find title of homepage"', function () {
    cy.visit('http://localhost:3000')

    cy.contains('Web developer')
  })
})
