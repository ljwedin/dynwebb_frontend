async function authUser (user) {
    let url = 'http://localhost:3000/login';
    const res = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: user// JSON.stringify(user)
    });

    return res.json();
}

function getUserInput () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
        userName: username,
        password: password
    }

    return user;
}

export default async function loginUser () {
    const user = getUserInput();
    const isValid = await authUser(user);

    if (isValid) {
        console.log('Success!');
    } else {
        console.log('Sadface :(');
    }
}

document.getElementById('loginBtn').addEventListener('click', test);