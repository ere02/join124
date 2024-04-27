/* require('dotenv').config({ path: 'forPayload.env' }); // Specify the path to your .env file */

const STORAGE_TOKEN = 'YMBIP9ZQY2061ZX52YW92ECD5MIETSERB6CTSZBD';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  return fetch(STORAGE_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Authorization': `Bearer ${STORAGE_TOKEN}`, // Use retrieved token
    },
  })
  .then(res => res.json());
}

async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}`;
  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${STORAGE_TOKEN}`, // Use retrieved token
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
