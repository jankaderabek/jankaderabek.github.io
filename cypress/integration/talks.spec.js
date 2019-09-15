describe('Show talks', function () {
  it('Find talk about RabbitMQ"', function () {
    cy.visit('http://localhost:3000/talks')

    cy.contains('RabbitMQ')
  })
})
