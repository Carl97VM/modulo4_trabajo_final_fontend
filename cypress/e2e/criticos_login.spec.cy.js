describe('Ingreso al Sistema', () => {
    it('should allow user to login successfully', () => {
      cy.visit('http://localhost:8080/login');
      cy.get('#usuario').type('user1@example.com');
      cy.get('#contrasena').type('password123');
      cy.get('[data-testid="acceder"]').click();
      cy.contains('Página de Administrador').should('be.visible');
    });
  });
  