import AuthPage from '../pages/authPage';

const authPage = new AuthPage();

describe('user should be able to sign in', () => {
    it('Should create new patient', () => {

        authPage.visit();
        authPage.goToRegister();

        const user = {
            firstName: 'John',
            lastName: 'Doe',
            dob: '1990-01-01',
            street: '123 Main St',
            postalCode: '12345',
            city: 'Anytown',
            state: 'Anystate',
            country: 'United States of America (the)',
            phone: '1234567890',
            email: 'john.doe5@example.com',
            password: 'thisIsAStrongPassword123!'
        };

        authPage.register(user);

        cy.url().should('include', 'login');
        
    })

});