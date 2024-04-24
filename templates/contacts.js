




/**
 * DECLARING ALL NEEDED INFORMATION From USERS_STORAGE.js
 */
const firstnames = allUsers.map((item) => item.firstname);
const familynames = allUsers.map((item) => item.familyname);
const nickname = allUsers.map((item) => item.nickname);
const emails = allUsers.map((item) => item.email);
let sameProject = [];
let initialList = [];
let letters = [];

let firstname, familyname, email, personalColor, initial, initialLastname;

/**
 * CALL HTML-FILE
 */
async function goToContactsHTML() {
  window.location.href = "../subpages/contacts.html";
}

async function startContacts(id) {
  await includeHTML();
  allNavButton(id);
  await findAllFirstLettersOfContacts();
  contacts.innerHTML += returnContactContainer();
}


async function findAllFirstLettersOfContacts() {
  let contact = document.getElementById("allContacts");
  const uniqueInitialsSet = new Set();

  let currentProject = allUsers[currentUser].projectId[0];
  sameProject = allUsers.filter((user) =>
    user.projectId.includes(currentProject)
  );

  for (let i = 0; i < sameProject.length; i++) {
    if (allUsers[currentUser] !== sameProject[i].id) {
      let initial = sameProject[i].firstname[0];

      if (!uniqueInitialsSet.has(initial)) {
        initial = initial.toUpperCase();
        uniqueInitialsSet.add(`${initial}`);
      }
      initialList = Array.from(uniqueInitialsSet);
      initialList.sort();
    }
  }
  renderFirstLetterArray(contact);
}

function renderFirstLetterArray(contact) {
  for (let i = 0; i < initialList.length; i++) {
    let initial = initialList[i];
    let initialHeadline = document.createElement("div");
    initialHeadline.id = initial;
    initialHeadline.innerHTML = `
             <h4  class="letter">${initial}</h4>
          <hr>   
            `;
    contact.appendChild(initialHeadline);
  }
  treatAllContacts();
}

async function treatAllContacts() {
  for (let i = 0; i < sameProject.length; i++) {
    ({ firstname, familyname, email, personalColor } = sameProject[i]);
    initial = firstname[0].toUpperCase();
    initialLastname = familyname[0].toUpperCase();
   const sortByInitial = document.getElementById(initial);

    let userHtml = `
          <div id="user${i}" class="users" onclick="handleContactOnClick(this, ${i})">
              <div class="user-circle size40px" style="background-color:${personalColor}">${initial}${initialLastname}</div>
              <div class="contact-name">
                  <h5>${firstname} ${familyname}</h5>
                  <span class="email">${email}</span>
              </div>
          </div>`;
    sortByInitial.innerHTML += userHtml;
}
}

  function handleContactOnClick(userDivs, index) {
    let activeContact = document.querySelector(".active");
    if (activeContact) {
      activeContact.classList.remove("active");
    }
     generateUserInfo(index);
    userDivs.classList.add("active");
  }

  function returnContactContainer() {
    return `
    <div class="Headlinecontainer">
    <div class="headline"><h1 class="padding20 right-border-2px">Contact</h1><h4 class="padding20">Better with a Team</h4>
  </div>
  <div id="start-container">
          </div>
    `;
  }

  function generateUserInfo(index){
    let container = document.getElementById("start-container");
    ({ firstname, familyname, email, personalColor } = sameProject[index]);
    initial = firstname[0].toUpperCase();
    initialLastname = familyname[0].toUpperCase();
    
    container.innerHTML = /*html*/ `
  <div class="user-circle size120px" style="background-color:${personalColor}"><h3>${initial}${initialLastname}</h3></div>
              <div class="contact-name">
                  <h5>${firstname} ${familyname}</h5>
                  <span class="email">${email}</span>
              </div>

`;
  }