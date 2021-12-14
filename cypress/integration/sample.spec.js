/// <reference types = "cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Firestarter', () => {
    const email = chance.email();
    const pass = 'ValidPassword23';

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('has a title', () => {
        cy.contains('Angular Firestarter');
        expect(2).to.equal(2);
    });

    it('click on login', () => {
        cy.pause();
        cy.get('#loginID').click();
        cy.get('input[formControlName=email]').type(email);
        cy.get('input[formControlName=password]').type(pass);
        cy.get('input[formControlName=passwordConfirm]').type(pass);
        cy.pause();
        cy.get('button[type=submit]').click();
        cy.pause();
        cy.get('button[name=logout]').click();
    });

});