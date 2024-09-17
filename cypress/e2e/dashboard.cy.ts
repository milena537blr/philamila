import { testData } from '../../src/testing/test-data';

const user = testData.users[0];

const exchange = testData.exchanges[0];

describe('dashboard', () => {
  it('should authenticate into the dashboard', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:3000/dashboard/exchanges');

    cy.wait(500);

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login?redirect=/dashboard/exchanges'
    );

    cy.findByRole('textbox', {
      name: /email/i,
    }).type(user.email);

    cy.findByLabelText(/password/i).type(
      user.password.toLowerCase()
    );

    cy.findByRole('button', {
      name: /log in/i,
    }).click();

    cy.findByRole('heading', {
      name: /exchanges/i,
    }).should('exist');
  });

  it('should navigate to and visit the exchange details page', () => {
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

    cy.findByRole('heading', {
      name: exchange.number,
    }).should('exist');
  });

  it('should create a new exchange', () => {
    cy.go('back');

    cy.findByRole('link', {
      name: /create exchange/i,
    }).click();

    const exchangeData = {
      position: 'Software Engineer',
      location: 'London',
      department: 'Engineering',
      info: 'Lorem Ipsum',
    };

    cy.findByRole('textbox', {
      name: /position/i,
    }).type(exchangeData.position);
    cy.findByRole('textbox', {
      name: /department/i,
    }).type(exchangeData.department);
    cy.findByRole('textbox', {
      name: /location/i,
    }).type(exchangeData.location);
    cy.findByRole('textbox', {
      name: /info/i,
    }).type(exchangeData.info);

    cy.findByRole('button', {
      name: /create/i,
    }).click();

    cy.findByText(/exchange created!/i).should('exist');
  });

  it('should log out from the dashboard', () => {
    cy.findByRole('button', {
      name: /log out/i,
    }).click();

    cy.wait(500);

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login'
    );
  });
});
