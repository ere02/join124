
/**
 * DECLARING ALL NEEDED INFORMATION From USERS_STORAGE.js
 */
const firstnames = allUsers.map(item => item.firstname);
const familynames = allUsers.map(item => item.familyname);
const nickname = allUsers.map(item => item.nickname);
const emails = allUsers.map(item => item.email);
let sameProject = [];
let initialList = [];
let letters = [];

/**
 * The CONTACT-List on the right side, will prepared hier 
 */
async function renderContacts(){
   
    return  `

<div id="contactList" class="sidepanel">

<button id="addContact"><h5 class="bold">Add new Contact</h5> <img src="../assets/svg/person_add_white.svg" class="icon"></button>

<div id="allContacts" class="scroll">
    
</div>
</div>
    `;
}

async function findAllFirstLettersOfContacts(){
    let contact = document.getElementById("allContacts");
    const uniqueInitialsSet = new Set();
    
    let currentProject = allUsers[currentUser].projectId[0];
    sameProject = allUsers.filter(user => user.projectId.includes(currentProject));

  for (let i = 0; i < sameProject.length; i++) {
    if (allUsers[currentUser] !== sameProject[i].id){
      //let initial = allUsers[i].firstname[0];
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

function  renderFirstLetterArray(contact){

    for (let i = 0; i < initialList.length; i++){   
        
            let initial = initialList[i];
            let initialHeadline = document.createElement("div");
            initialHeadline.id = initial;
            initialHeadline.innerHTML = `
            <div id="${initial}"> <h4  class="letter">${initial}</h4>
          <hr>
        </div>
            `;          
             contact.appendChild(initialHeadline);
       }
    
       treatAllContacts();
    }


async function treatAllContacts(){


    for (let i = 0; i < sameProject.length; i++){
        
        let firstname = sameProject[i].firstname;
        let initial = firstname[0].toUpperCase();
        let lastname = sameProject[i].familyname;
        let initialLastname = lastname[0].toUpperCase();
        let email = sameProject[i].email;
        let personalColor = sameProject[i].personalColor;
        
        let sortByInitial = document.getElementById(`${initial}`);
        sortByInitial.innerHTML += `
        <div id="user${i}" class="users" >
          <div class="user-circle" style="background-color:${personalColor}">${initial}${initialLastname}</div>
          <div class="contact-name">
            <h5>${firstname} ${lastname}</h5>
            <span class="email">${email}</span>
          </div>
        `;
    }
    }

  // const users = document.querySelectorAll('.users');

  //   function handleClick(event) {
        
  //         users.forEach(user => {
  //             user.style.backgroundColor = '';
  //         });
  //         if (event.target) {
  //           event.target.style.backgroundColor = 'var(--use_border-button-bg-text)';
  //           console.log(currentColor);
  //       } else {
  //           console.error("Target element is undefined.");
  //       }
  //     }

  //     users.forEach(user => {
  //         user.addEventListener('click', handleClick);
  //     });


      function updateColor(event) {
        if (event.target) {
            event.target.style.backgroundColor = currentColor;
            console.log(currentColor);
        } else {
            console.error("Target element is undefined.");
        }
    }


function renderFirstnames(firstnames,contact){
   
	for (let i = 0; i < firstnames.length; i++) {
		let firstname = firstnames[i];
        let lastname = allUsers[i].familyname;
	    let email = allUsers[i].email;
    definitionOfContactInfo(contact, lastname, email, firstname, i);
	}
}

function definitionOfContactInfo(contact, lastname, email,firstname, i){
    
    contact.innerHTML += `
        <h4  class="letter">A</h4>
        <hr>
        <div id="user${i}" class="users">
          <div class="user-circle">AW</div>
          <div class="contact-name">
            <h5>${firstname} ${lastname}</h5>
            <span>${email}</span>
          </div>
`;
}
