document.addEventListener("DOMContentLoaded", () => {
  const userDivs = document.querySelectorAll(".users");
  doEventlistenerOnContacts(userDivs);
});

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

/**
 * CALL HTML-FILE
 */
async function goToContactsHTML() {
  window.location.href = "../subpages/contacts.html";
}

async function startContacts(id) {
  await includeHTML();
  allNavButton(id);
  contacts.classList.remove("displaynone");
  contacts.innerHTML = await renderContacts();
  await findAllFirstLettersOfContacts();
  contacts.innerHTML += generateEditContactHTML();
}

/**
 * The CONTACT-List on the right side, will prepared here
 */
async function renderContacts() {
  return `
<div id="contactList" class="sidepanel">
<button id="addContact"><h5 class="bold">Add new Contact</h5> <img src="../../assets/svg/person_add_white.svg" class="icon"></button>
<div id="allContacts" class="scroll">
</div>
</div>
    `;
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
      const { firstname, familyname, email, personalColor } = sameProject[i];
      const initial = firstname[0].toUpperCase();
      const initialLastname = familyname[0].toUpperCase();

      const sortByInitial = document.getElementById(initial);
      const userHtml = `
          <div id="user${i}" class="users">
              <div class="user-circle" style="background-color:${personalColor}">${initial}${initialLastname}</div>
              <div class="contact-name">
                  <h5>${firstname} ${familyname}</h5>
                  <span class="email">${email}</span>
              </div>
          </div>`;
      sortByInitial.innerHTML += userHtml;
  }
}

const userDivs = document.querySelectorAll(".users");

function doEventlistenerOnContacts() {
  userDivs.forEach((div) => {
      div.addEventListener("click", () => {
          handleContactOnClick(div);
      });
  });
}

function handleContactOnClick(div) {
  if (activeContact) {
      activeContact.classList.remove("active");
  }
  div.classList.add("active");
  activeContact = div;
}

