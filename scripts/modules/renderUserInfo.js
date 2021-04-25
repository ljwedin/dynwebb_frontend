import toggleNewsletter from './toggleNewsletter.js';
import logoutUser from './logoutUser.js';

// Grabs id from localStorage, sends POST to recieve user info from server
// Renders HTML based on fetch response, shows error in log if request failed

export default async function renderUserInfo () {
    const id = { id: localStorage.getItem('id') };
    const contentDiv = document.querySelector('.content');

    const bigHeader = document.querySelector('.bigHeader');
    bigHeader.textContent = 'Välkommen!';

    let url = 'https://dynwebb-01-backend.herokuapp.com/userpage'

    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    };

    let userInfo = await response.json();

    contentDiv.innerHTML = `
    <p>Användarnamn: ${userInfo.userName}</p><br />
    <p>Email: ${userInfo.email}</p><br />
    <div id="newsletterBox"><p>Nyhetsbrev: </p><p id="newsletterText">${userInfo.newsletter}</p><button id="toggleNewsletter">Ändra</button></div><br />
    <button id="logoutBtn">Logga ut</button>
    `;

    document.getElementById('toggleNewsletter').addEventListener('click', toggleNewsletter);
    document.getElementById('logoutBtn').addEventListener('click', logoutUser);
}