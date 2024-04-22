/**
 * Stores a user's data (name, email, password) in a remote storage using a provided token.
 *
 * @param {string} name The user's name.
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 * @returns {Promise<object>} A promise resolving to the JSON response from the remote storage.
 */
/**
 * The token used for authentication with the remote storage.
 */
const STORAGE_TOKEN = 'YMBIP9ZQY2061ZX52YW92ECD5MIETSERB6CTSZBD';

/**
 * The URL of the remote storage service.
 */
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(name, email, password) {
    const payload = { name, email, password, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
    .then(res => res.json());
}

/**
 * Retrieves a user's data from remote storage based on the provided key.
 *
 * @param {string} key The unique identifier of the user's data.
 * @returns {Promise<object>} A promise resolving to the JSON-formatted data from the remote storage.
 */
async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json());
}







/* const STORAGE_TOKEN = 'YMBIP9ZQY2061ZX52YW92ECD5MIETSERB6CTSZBD';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';


async function setItem(name, email, password) {
    const payload = { name, email, password, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
    .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json());
} */