import toggleNewsletter from './toggleNewsletter.js';

export default async function renderUserInfo () {
    const id = { id: localStorage.getItem('id') };
    const contentDiv = document.querySelector('.content');

    let url = 'http://localhost:3000/userpage'

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
    <div id="newsletterBox"><p>Nyhetsbrev: </p><p id="newsletterText">${userInfo.newsletter}</p><button id="toggleNewsletter">Ändra</button></div>
    `;

    document.getElementById('toggleNewsletter').addEventListener('click', toggleNewsletter);
}