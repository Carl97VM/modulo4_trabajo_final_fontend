describe('Registrar Producto desde el Modal', () => {
    before(() => {
        // Proceso de Logueo
        cy.visit('http://localhost:8080/login');
        cy.get('#usuario').type('user1@example.com');
        cy.get('#contrasena').type('password123');
        cy.get('[data-testid="acceder"]').click();
        cy.contains('Página de Administrador').should('be.visible');
    });

    it('should open the product form modal and create a new product', () => {
        // Abrir Modal
        cy.get('[data-testid="nuevoProducto"]').click();

        cy.contains('Nuevo Producto').should('be.visible');

        cy.get('[data-testid="productName"]').type('Nuevo Producto');
        cy.get('[data-testid="productDescription"]').type('Descripción del nuevo producto');
        cy.get('[data-testid="productPrice"]').type('99.99');

        cy.get('button').contains('Guardar').click();

        cy.contains('Producto guardado con éxito!').should('be.visible');

        cy.contains('Nuevo Producto').should('be.visible');
    });
});
