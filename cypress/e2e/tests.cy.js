import AuthPage from '../pages/authPage';
import LanguageSelector from '../components/languageSelector';
import CartPage from '../pages/cartPage';
import ProductPage from '../pages/productPage';
import ProfilePage from '../pages/profilePage';

const authPage = AuthPage;
const language = LanguageSelector;
const cart = CartPage;
const product = ProductPage;
const profile = ProfilePage;

describe('User should be able to perform actions', () => {
    it('User should sign in filling out the form', () => {

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

    it('should change language to Spanish', () => {
        cy.visit('/');
        language.changeLanguage('es');
        language.verifyLanguageChanged();
    })

    it('Should add product to cart'), () => {
        authPage.visit('/');

        product.selectFirstProduct();
        cart.addToCart();
        cart.verifyCart();
    }

    it('should update user profile', () => {
        authPage.visit('/');
        authPage.goToLogin();
        authPage.login('john.doe5@example.com', 'thisIsAStrongPassword123!');
        authPage.verifyLoginSuccess();

        profile.goToProfile();
        profile.updateProfile('John', 'Smith');
        profile.verifyUpdate();

    })

});