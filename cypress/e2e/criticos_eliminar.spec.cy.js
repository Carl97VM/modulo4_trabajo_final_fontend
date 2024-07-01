describe('Verificar la funcionalidad de eliminar un producto', () => {
    before(() => {
      // Proceso de Logueo
      cy.visit('http://localhost:8080/login');
      cy.get('#usuario').type('user1@example.com');
      cy.get('#contrasena').type('password123');
      cy.get('[data-testid="acceder"]').click();
      cy.contains('Página de Administrador').should('be.visible');
    });
  
    it('Debería permitir eliminar un producto', () => {
      // Verificar que la tabla está visible
      cy.get('[data-testid="productsTable"]').should('be.visible');
  
      // Verificar que la tabla contiene al menos una fila de producto
      cy.get('[data-testid^="productRow-"]').should('have.length.greaterThan', 0);
  
      // Seleccionar la primera fila de producto y hacer clic en el botón de eliminar
      cy.get('[data-testid^="productRow-"]').first().within(() => {
        cy.get('[data-testid^="deleteButton-"]').first().click();
      });
  
      // Verificar que el modal de confirmación se ha abierto
      cy.get('[data-testid="confirmDeleteModal"]').should('be.visible');
      cy.get('[data-testid="productName"]').should('be.visible');
      cy.get('[data-testid="productDescription"]').should('be.visible');
  
      // Confirmar la eliminación
      cy.get('[data-testid="confirmDeleteButton"]').click();
  
      // Verificar que el modal se ha cerrado
      cy.get('[data-testid="confirmDeleteModal"]').should('not.exist');
  
      // Verificar que el producto ha sido eliminado de la tabla
      // Asegúrate de reemplazar los siguientes selectores con los valores correctos para los productos
      cy.get('[data-testid="productsTable"]').should('not.contain.text', 'Nuevo Nombre');
      cy.get('[data-testid="productsTable"]').should('not.contain.text', 'Nueva Descripción');
    });
  });
  