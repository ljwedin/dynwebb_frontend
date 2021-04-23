function getUserInput () {
    const username = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const user = {
        userName: username,
        password: pass
    };

    return user;
}

export default async function login () {
    let user = getUserInput();
    let url = 'http://localhost:3000/login'; // https://dynwebb-01-backend.herokuapp.com/login http://localhost:3000/login
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
        console.log('Success!');
    } else {
        console.log('Sadface :(');
    }
}

// async function authUser (user) {
//     let url = 'http://localhost:3000/login'; // https://dynwebb-01-backend.herokuapp.com/login http://localhost:3000/login
//     fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         return data;
//     });
// }

// function getUserInput () {
//     const username = document.getElementById('username').value;
//     const pass = document.getElementById('password').value;

//     const user = {
//         userName: username,
//         password: pass
//     };

//     return user;
// }

// async function getUserCredentials () {
//     const user = getUserInput();
//     return isValid = await authUser(user);
// }

// export default async function loginUser () {
//     await getUserCredentials().then((isValid) => {
//         if (isValid) {
//             console.log('Success!');
//         } else {
//             console.log('Sadface :(');
//         }
//     })
// }

document.getElementById('loginBtn').addEventListener('click', login);