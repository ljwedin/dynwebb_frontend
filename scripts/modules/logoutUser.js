import landingPage from './landingPage.js';

export default function logoutUser () {
    localStorage.clear();
    landingPage();
}