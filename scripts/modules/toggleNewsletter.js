import renderUserInfo from './renderUserInfo.js';

export default async function toggleNewsletter () {
    let newsletter;
    let string = document.getElementById('newsletterText').innerText;

    console.log(string);
    console.log(typeof string);

    if (string === 'Ja') {
        newsletter = false;
    } else {
        newsletter = true;
    }

    const postNewsletter = { id: localStorage.getItem('id'), newsletter: newsletter};

    console.log(postNewsletter);

    let url = 'http://localhost:3000/userpage/updatenewsletter'

    let response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postNewsletter)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        renderUserInfo();
    }
}