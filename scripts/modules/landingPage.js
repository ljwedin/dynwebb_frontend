import renderUserInfo from './renderUserInfo.js';
import renderRegistrationPage from './regUser.js';
import login from './loginUser.js';

// Renders landing page / login page based on if id stored or not

export default function landingPage () {
    if (localStorage.getItem('id')) {
        renderUserInfo();
    } else {
        let contentBox = document.querySelector('.content');
        contentBox.innerHTML = '';
        let html = `
            <label for="username">Användarnamn</label><br />
            <input type="text" id="username" name="username" /><br /><br />
            <label for ="password">Lösenord</label><br />
            <input type="password" id="password" name="password" /><br />
            <button id="loginBtn">Logga in</button><br />
            <button id="regBtn">Registrera</button>
            `;

        contentBox.insertAdjacentHTML('beforeend', html);

        document.getElementById('loginBtn').addEventListener('click', login);
        document.getElementById('regBtn').addEventListener('click', renderRegistrationPage);
    }
}