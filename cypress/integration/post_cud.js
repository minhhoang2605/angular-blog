context('Post Create Update Delete', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  afterEach(() => {
    cy.contains('Home').click()
    cy.reload()
  })

  it("Create a Post", function () {
    cy.contains('Create Post').click()

    cy.get('#form-item-title').type('test cypress title')

    cy.get('#form-item-content').type('test cypress content')

    cy.contains('CREATE A POST').click()

    cy.reload()

    cy.contains('test cypress title').click()

    cy.contains('test cypress title')
    cy.contains('test cypress content')
  })

  it("Edit a Post", function () {
    cy.contains('test cypress title')
      .parent()
      .parent()
      .contains('edit')
      .click({ force: true })

    cy.get('#form-item-title').type(' edited')

    cy.get('#form-item-content').type(' edited')

    cy.contains('UPDATE POST').click()

    cy.contains('Home').click()

    cy.reload()

    cy.contains('test cypress title edited').click()

    cy.contains('test cypress title edited')
    cy.contains('test cypress content edited')
  })

  it("Delete a Post", function () {
    cy.contains('test cypress title edited')
      .parent()
      .parent()
      .contains('delete') 
      .click({ force: true })

    cy.contains('test cypress title edited').should('not.exist')
  })
})