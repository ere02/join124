function onloadFunc() {
  console.log("Test");
   /* deleteData(); */
}

/*Firebase storage URL" */
const FIREBASE_URL = 'https://join124-ceed8-default-rtdb.europe-west1.firebasedatabase.app/';

async function setItem(path="", data={}){
  let response = await fetch(FIREBASE_URL + path + ".json",{
    method: "POST",
    header: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }); 
  return responseToJson = await response.json();
}

async function getItem(path = "") {
  let response = await fetch(FIREBASE_URL + path + ".json"); /*wichtig! ".json*/
  return responseToJson = await response.json();
}

async function deleteData(path=""){
  let response = await fetch(FIREBASE_URL + path + ".json",{
    method: "DELETE",
  }); 
  return responseToJson = await response.json();
}






































async function deleteItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
  await fetch(url)

}
/* const STORAGE_TOKEN = 'YMBIP9ZQY2061ZX52YW92ECD5MIETSERB6CTSZBD';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';
 */
/* async function setItem(key, value) {
    const payload = { key:key, value:value, token: STORAGE_TOKEN };
    return await fetch(STORAGE_URL, { method: 'POST', body:[JSON.stringify(payload) ]})
        .then(res => res.json());
}
 */
/* async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.data) {
            return data.data.value;
        } else {
            throw new Error(`Could not find data with key "${key}".`);
        }
    } catch (error) {
        console.error('An error occurred while fetching the item:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
} */

/* async function getAllTasks(tasks) {
    // Assuming tasks is an array of tasks
    const allTasks = JSON.stringify(tasks);
    const response = await setItem('allTasks', allTasks); // Send to server
    if (response.status === 'success') {
      alert('All tasks are stored');
      storage();
      console.log(allTasks);
    } else {
      alert('Failed to store tasks');
    }
  } */