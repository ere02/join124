require('dotenv').config();

const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(key, value) {
    const payload = { key, value }; // Don't include token here
    return fetch(STORAGE_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Authorization': `Bearer ${process.env.STORAGE_TOKEN}`, // Use STORAGE_TOKEN
        },
    })
    .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}`;
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.STORAGE_TOKEN}`, // Use STORAGE_TOKEN
        },
    })
    .then(res => res.json())
    .then(res => {
        // Improved code
        if (res.data) { 
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}
