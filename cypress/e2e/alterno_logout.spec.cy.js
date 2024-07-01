describe('Verificar la funcionalidad de Cerrar Sesión', () => {
    before(() => {
      // Proceso de Logueo
      cy.visit('http://localhost:8080/login');
      cy.get('#usuario').type('user1@example.com');
      cy.get('#contrasena').type('password123');
      cy.get('[data-testid="acceder"]').click();
      cy.contains('Página de Administrador').should('be.visible');
    });
  
    it('Debería cerrar sesión correctamente y redirigir al usuario a la página de inicio de sesión', () => {
      cy.get('button').contains('Salir').click();
  
      cy.url().should('include', '/login');
  
      cy.contains('Inicio de Sesión').should('be.visible');
  
      cy.visit('http://localhost:8080/admin/home');
      cy.url().should('include', '/login');
    });
  });
  