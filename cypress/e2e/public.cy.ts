import { testData } from '../../src/testing/test-data';

const customer = testData.customers[0];

const exchange = testData.exchanges[0];

describe('public application flow', () => {
  it('should display the customer public page', () => {
    cy.visit(
      `http://localhost:3000/customers/${customer.id}`
    );

    cy.findByRole('heading', {
      name: customer.name,
    }).should('exist');

    cy.findByRole('heading', {
      name: customer.email,
    }).should('exist');

    cy.findByRole('heading', {
      name: customer.phone,
    }).should('exist');

    cy.findByText(new RegExp(customer.info, 'i')).should(
      'exist'
    );
  });

  it('should navigate to and display the public exchange details page', () => {
    cy.findByTestId('exchanges-list').should('exist');

    cy.findByRole('row', {
      name: new RegExp(
        `${exchange.number} ${exchange.locationFrom} ${exchange.locationTo} View`,
        'i'
      ),
    }).within(() => {
      cy.findByRole('link', {
        name: /view/i,
      }).click();
    });

    cy.url().should(
      'equal',
      `http://localhost:3000/customers/${customer.id}/exchanges/${exchange.id}`
    );

    cy.findByRole('heading', {
      name: exchange.number,
    }).should('exist');

    /*  cy.findByText(new RegExp(exchange.info, 'i')).should(
      'exist'
    ); */
  });
});
