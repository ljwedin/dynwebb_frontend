const main = document.querySelector('.main');

document.getElementById('loginBtn').addEventListener('click', test);

function test () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
        userName: username,
        password: password
    }

    console.log(user, JSON.stringify(user));
}