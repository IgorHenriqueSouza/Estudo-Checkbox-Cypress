describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {
      cy.get('#check input[type="checkbox"]')
      cy.get('#tecnologia1').check()
      cy.get('#tecnologia6').check()
      cy.get('#tecnologia3').check()
        .as('checkboxes')
        .check()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })
    })
  })