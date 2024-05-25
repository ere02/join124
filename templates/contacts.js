/**
 * DECLARING ALL NEEDED INFORMATION From USERS_STORAGE.js
 */
// const firstnames = allUsers.map((item) => item.firstname);
// const familynames = allUsers.map((item) => item.familyname);
// const nickname = allUsers.map((item) => item.nickname);
// const emails = allUsers.map((item) => item.email);
//let sameProject = [];
// let currentProject = allUsers.filter(t => t['projectId'][0]);


// const firstnames = currentProject.map(item => item.firstname);
// const familynames = currentProject.map(item => item.familyname);
// const emails = currentProject.map(item => item.email);


let initialList = [];
let letters = [];

let firstname,
  familyname,
  email,
  personalColor,
  initial,
  initialLastname,
  phone;

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
  <div id="start-container" class="contact-container flex-column gap16">
          </div>
    `;
}

function generateUserInfo(index) {
  let container = document.getElementById("start-container");
  ({ firstname, familyname, email, personalColor, phone } = sameProject[index]);
  initial = firstname[0].toUpperCase();
  initialLastname = familyname[0].toUpperCase();

  container.innerHTML = /*html*/ `
<div class="flex">
  <div class="user-circle size120px" style="background-color:${personalColor}"><h3>${initial}${initialLastname}</h3></div>
              <div class="flex-column gap16">
                  <h3>${firstname} ${familyname}</h3>
                  <div class="flex" style="min-width:150px">
                  <div class="flex height16px width50vh" onclick="toggleEditLayer(${index})">${returnEditSVG()}Edit </div>
                  <div class="flex height16px width50vh">${returnDeleteSVG()}Delete</div>
                </div>
              </div>
</div>   
  <h4>Contact Information</h4>       
<div class="flex-column gap16">
              <h5 class=bold>E-mail</h5>
                  <span class="email">${email}</span>
              <h5 class="bold">Phone</h5>
              <span class="phone">${phone}</span>
  </div>
</div>
`;

  animationContactContainer();
}

function animationContactContainer() {
 let container = document.getElementById("start-container");
  let aniContact = document.querySelector(".aniContact"); 

  if (aniContact) {
    restartAnimation();
  }

  container.classList.add("aniContact");
}

function restartAnimation() {
  const container = document.querySelector(".aniContact");
  container.style.animation = "none"; // Animation zurücksetzen
  void container.offsetWidth; // Trigger für Neustart
  container.style.animation = "slideIn 300ms ease-out";
}

function toggleEditLayer(i) {

 let container = document.getElementById("editableContact");
  let layer = document.getElementById("editLayer");
  let clickableBG = document.getElementById("clickableBG");
  let aniEdit = document.querySelector(".aniEditForm");
 
  if (aniEdit) {
 removeAniEdit(container, layer, clickableBG);
  } else {
      addAniEdit(container, layer, clickableBG);   
       if (i !== null){
        editUserInfo(i);
      } else {
        editUserInfo(null);
      }
  }
}
function addAniEdit(container, layer, clickableBG){ 
  activate(container);
     container.classList.add("aniEditForm");
    container.classList.remove("aniOutForm"); 
     activate(layer);
    clickableBG.classList.add("fadeInBG");
}

function removeAniEdit(container, layer, clickableBG){
  container.classList.remove("aniEditForm");
    container.classList.add("aniOutForm");
    clickableBG.classList.add("fadeOutBG");
    deactivate(layer);
  
}

function activate(div) {
  div.classList.remove("displaynone");
}

function deactivate(div) {
  div.classList.add("displaynone");
  debugger;
}

function slideOut() {
  let contact = document.getElementById("editableContact");
  let layer = document.getElementById("editLayer");
  contact.classList.remove("aniEditForm");
  contact.classList.add("aniOutForm");
  let clickableBG = document.getElementById("clickableBG");
  clickableBG.classList.add("fadeBG");
  deactivate(layer);
}

function returnEditSVG() {
  return `
<svg width="17" height="18" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g>
<path d="M8.416,70.751l5.892,-0l36.296,-36.296l-5.892,-5.891l-36.296,36.295l0,5.892Zm60.178,-42.398l-17.885,-17.674l5.892,-5.891c1.613,-1.613 3.594,-2.42 5.944,-2.42c2.349,0 4.33,0.807 5.944,2.42l5.891,5.891c1.613,1.613 2.455,3.56 2.525,5.839c0.07,2.28 -0.701,4.226 -2.314,5.839l-5.997,5.996Zm-6.102,6.208l-44.607,44.606l-17.885,-0l-0,-17.885l44.607,-44.606l17.885,17.885Z" class="svg-color" style="fill-rule:nonzero;"/></g>
</svg>
`;
}

function returnDeleteSVG() {
  return `
  <svg width="17" height="18" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
<path d="M3.14453 18C2.59453 18 2.1237 17.8042 1.73203 17.4125C1.34036 17.0208 1.14453 16.55 1.14453 16V3C0.861198 3 0.623698 2.90417 0.432031 2.7125C0.240365 2.52083 0.144531 2.28333 0.144531 2C0.144531 1.71667 0.240365 1.47917 0.432031 1.2875C0.623698 1.09583 0.861198 1 1.14453 1H5.14453C5.14453 0.716667 5.24036 0.479167 5.43203 0.2875C5.6237 0.0958333 5.8612 0 6.14453 0H10.1445C10.4279 0 10.6654 0.0958333 10.857 0.2875C11.0487 0.479167 11.1445 0.716667 11.1445 1H15.1445C15.4279 1 15.6654 1.09583 15.857 1.2875C16.0487 1.47917 16.1445 1.71667 16.1445 2C16.1445 2.28333 16.0487 2.52083 15.857 2.7125C15.6654 2.90417 15.4279 3 15.1445 3V16C15.1445 16.55 14.9487 17.0208 14.557 17.4125C14.1654 17.8042 13.6945 18 13.1445 18H3.14453ZM3.14453 3V16H13.1445V3H3.14453ZM5.14453 13C5.14453 13.2833 5.24036 13.5208 5.43203 13.7125C5.6237 13.9042 5.8612 14 6.14453 14C6.42786 14 6.66536 13.9042 6.85703 13.7125C7.0487 13.5208 7.14453 13.2833 7.14453 13V6C7.14453 5.71667 7.0487 5.47917 6.85703 5.2875C6.66536 5.09583 6.42786 5 6.14453 5C5.8612 5 5.6237 5.09583 5.43203 5.2875C5.24036 5.47917 5.14453 5.71667 5.14453 6V13ZM9.14453 13C9.14453 13.2833 9.24037 13.5208 9.43203 13.7125C9.6237 13.9042 9.8612 14 10.1445 14C10.4279 14 10.6654 13.9042 10.857 13.7125C11.0487 13.5208 11.1445 13.2833 11.1445 13V6C11.1445 5.71667 11.0487 5.47917 10.857 5.2875C10.6654 5.09583 10.4279 5 10.1445 5C9.8612 5 9.6237 5.09583 9.43203 5.2875C9.24037 5.47917 9.14453 5.71667 9.14453 6V13Z" class="svg-color"/>
</svg>
  
  `;
}

function returnPersonSVG(){
  return `
  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_154726_6058" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#ffffff"/>
</mask>
<g mask="url(#mask0_154726_6058)">
<path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="#ffffff"/>
</g>
</svg>
  `;
}