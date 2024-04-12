

const firstnames = allUsers.map(item => item.firstname);
const familynames = allUsers.map(item => item.familyname);
const nickname = allUsers.map(item => item.nickname);
const emails = allUsers.map(item => item.email);
let contactlist = [];
let letters = [];

 
renderContacts()


async function renderContacts(){

    return /*html*/ `

<div id="contactList" class="sidepanel">

<button id="addContact"><h5 class="bold">Add new Contact</h5> <img src="../assets/svg/person_add_white.svg" class="icon"></button>

<div id="allContacts">
    <div id="A">
        <h4  class="letter">A</h4>
        <hr>
        <div id="user1" class="users">
          <div class="user-circle">AW</div>
          <div class="contact-name">
            <h5>Anton Mayer</h5>
            <span>email@mayer.de</span>
          </div>
        </div>

    </div>
</div>
</div>

    `;

}

async function contactInit(){
    renderContacts();
    let resp = await fetch('../user_storage.js');
    allUsers = await resp.json();
    findAllFirstLettersOfFirstnames();
}

function findAllFirstLettersOfFirstnames(){
    
    let contactPanel = document.getElementdById('allContacts');
    contactPanel.innerHTML = '';
    // sobald der CurrentUser global definiert ist, hier eine If-Abfrage einbauen, die die ProjektId von CurrentUser abfragt 
    // und nur die User aufnehmen, die die gleiche ProjectId haben
    for (let i = 1; i < contactlist.length; i++){
        const contact = contactlist[i];
        const firstname = contact['firstname'];
        contactPanel.innerHTML += generateContactBox(contact,firstname,i);
        const firstLetter = firstname.charAt(0);
        if(letters.includes(firstLetter)){
            letters.push(firstLetter);
        }
        renderLetters(firstLetter);
    }
    
}

function generateContactBox(contact, firstname, i){
    let lastname = contact.familyname;
  
    let email = contact.email;
return /*html*/ `
    <div id="user${i}" class="users">
    <div class="user-circle">AW</div>
    <div class="contact-name">
      <h5>${firstname} ${lastname}</h5>
      <span>${email}</span>
  </div>
</div>
`;

}

function renderLetters(firstLetter){
    let Letterbox = document.getElementById(`letterbox${firstLetter}`);
    Letterbox.innerHTML= '';
    for (let index = 0; index < letters.length; index++){
        const element = letters[index];
        Letterbox.innerHTML += `
            <div id=${firstLetter}><h5 class="bold">${letters[index]}</h5></div>
        `;

    }

}



// async function init(){
//     let resp = await fetch('../user_storage.js');
//     allUsers = await resp.json();
//     renderUser();
// }
// function findAllFirstLettersOfStates() {
//     const uniqueInitialsSet = new Set();
//       
//     let contactContainer = document.getElementById("allContacts");
// //    let findInitial = document.getElementById("allInitials");
// //      findInitial.innerHTML = '';
//   for (let i = 0; i < allUsers.length; i++) {
//       const initial = allUsers[i].firstname[0];
//       if (!uniqueInitialsSet.has(initial)) {
//           uniqueInitialsSet.add(initial);
//           let alphabetLetter = document.createElement("div");
//           alphabetLetter.innerText = initial;
//           alphabetLetter.classList.add("initial-headline");
//           alphabetLetter.innerHTML = `
         
//           `;
//            findInitial.appendChild(alphabetLetter);
//       }
//   }
// }