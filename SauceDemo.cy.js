// cypress/integration/SauceDemo.cy.js

// Test Case 1: Get redirected to the Login page Successfully https://www.saucedemo.com/
describe('Redirect to the SauceDemo Login Page ', () => {
  it('User(s) should be redirected successfully', () => {
    cy.visit('https://saucedemo.com/');
  });
});

// Test Case 2: Login to SauceDemo with Invalid Credentials
describe('Login to SauceDemo with Invalid Credentials', () => {
  it('User(s) should not be able to log in successfully', () => {
    cy.visit('https://saucedemo.com/');

    // Enter Invalid Login Credential(s)
    cy.get('#user-name').type('standard');
    cy.get('#password').type('secret')
    cy.get('#login-button').click();

    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });
});

// Test Case 3: Login to SauceDemo when both fields are empty
describe('Login to SauceDemo when both fields are empty', () => {
  it('User(s) should not be able to log in successfully', () => {
    cy.visit('https://saucedemo.com/');

    // Both Username and Password field empty
    cy.get('#login-button').click();

    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });
});

// Test Case 4: Login to SauceDemo with Valid Credentials
describe('Login to SauceDemo with Valid Credentials', () => {
  it('User(s) should log in successfully', () => {
    cy.visit('https://saucedemo.com/');

    // Enter Valid Login Credential(s)
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });
});


//Test Case 5: Verify that the items are sorted by Name (A -> Z).
describe('Sort Items from A to Z', () => {
  it('should verify that user(s) can sort from A to Z', () => {
    // Visit the page with the inventory
    cy.visit('https://www.saucedemo.com/v1/inventory.html');

    // Verify that the page URL matches the expected URL
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

    // Click the sorting container to open the dropdown
    cy.get(".product_sort_container")
    cy.get(".product_sort_container").select('az');

    // Get the text of all inventory items
    // Verify initial sorting (A -> Z)
    cy.get('.product_sort_container').select('az');

    // Get the text of all inventory items and store it in an array
    const itemNamesAZ = [];
    cy.get('.inventory_item_name').each(($el) => {
      itemNamesAZ.push($el.text().trim());
    }).then(() => {
      // Assert that the items are sorted alphabetically (A -> Z)
      expect(itemNamesAZ).to.have.lengthOf(6); // Ensure the correct number of elements
      expect(itemNamesAZ).to.deep.equal([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)',
      ]);
    });
  });
})



describe('Change the sorting to Name Z -> A', () => {
  it('should verify that user(s) can sort from Z to A', () => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

    cy.get('.product_sort_container').select('za');

    // Get the text of all inventory items again and store it in an array
    const itemNamesZA = [];
    cy.get('.inventory_item_name').each(($el) => {
      itemNamesZA.push($el.text().trim());
    }).then(() => {
      // Assert that the items are sorted alphabetically (Z -> A)
      expect(itemNamesZA).to.have.lengthOf(6); // Ensure the correct number of elements
      expect(itemNamesZA).to.deep.equal([
        'Test.allTheThings() T-Shirt (Red)',
        'Sauce Labs Onesie',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Bike Light',
        'Sauce Labs Backpack',
      ]);
      cy.debug();
    });
  });
});



