
const STORAGE_TOKEN = 'YMBIP9ZQY2061ZX52YW92ECD5MIETSERB6CTSZBD';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(key, value) {
    const payload = { key:key, value:value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        // Verbesserter code
        console.log(res)
        if (res.data) {
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}
