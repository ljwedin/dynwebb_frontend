// Renders page for user input

export default function renderRegistrationPage () {
    const bigHeader = document.querySelector('.bigHeader');
    bigHeader.textContent = 'Registrera ny användare';
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = `
        <label for="username">Användarnamn</label><br />
        <input type="text" id="username" name="username" /><br /><br />
        <label for ="password">Lösenord</label><br />
        <input type="password" id="password" name="password" /><br />
        <label for ="email">Email</label><br />
        <input type="text" id="email" name="email" /><br />
        <label for ="newsletter">Jag vill ha nyhetsbrev</label><br />
        <input type="checkbox" id="newsletter" name="newsletter" /><br />
        <button id="regUserBtn">Registrera</button>`;

    document.getElementById('regUserBtn').addEventListener('click', regUser);
}

// Grabs data from input fields and posts do database via server POST

async function regUser () {
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const newsletter = document.getElementById('newsletter').checked;

    const newUser = {
        userName: userName,
        password: password,
        email: email,
        newsletter: newsletter
    }

    let url = 'https://dynwebb-01-backend.herokuapp.com/newUser'

    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    };
}