import renderUserInfo from './renderUserInfo.js';

export default async function toggleNewsletter () {
    let newsletter;
    let string = document.getElementById('newsletterText').innerText;

    if (string === 'Ja') {
        newsletter = false;
    } else {
        newsletter = true;
    }

    const postNewsletter = { id: localStorage.getItem('id'), newsletter: newsletter};

    let url = 'https://dynwebb-01-backend.herokuapp.com/userpage/updatenewsletter'

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