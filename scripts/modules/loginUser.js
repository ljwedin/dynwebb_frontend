import renderUserInfo from './renderUserInfo.js';

// Grabs info from input fields

function getUserInput () {
    const username = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const user = {
        userName: username,
        password: pass
    };

    return user;
}

// Passes user input to server via fetch and renders user page
// Shows error in log if request failed, shows user error message if faulty credentials

export default async function login () {
    let user = getUserInput();
    let url = 'https://dynwebb-01-backend.herokuapp.com/login';
    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    };

    let validUser = await response.json();

    if (validUser) {
        localStorage.setItem("id", validUser);
        renderUserInfo();
    } else {
        let contentBox = document.querySelector('.content');
        contentBox.insertAdjacentHTML('beforeend', '<p>Fel användarnamn eller lösenord! Försök igen.');
    }
}