

const firstnames = allUsers.map(item => item.firstname);
const familynames = allUsers.map(item => item.familyname);
const nickname = allUsers.map(item => item.nickname);
const emails = allUsers.map(item => item.email);
let contactlist = [];
let letters = [];





async function renderContacts(){

    return  `

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

function treatAllContacts(){
    let contact = document.getElementById("allContacts");
    contact.innerHTML = '';

    if(firstnames !== undefined){
        renderFirstnames(firstnames, contact)
    } 
    return ;
}


function renderFirstnames(firstnames,contact){
	for (let i = 0; i < firstnames.length; i++) {
		let name = firstnames[i];
    definitionOfContactInfo(contact, i,name);
	}
}

function definitionOfContactInfo(contact, i,firstname){
    let lastname = allUsers[i].familyname;
	let email = allUsers[i].email;
    contact.innerHTML = `
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



// /*

// function treatContactsBundesStates(contacts) {
// 	let statesContainer = document.getElementById("allStates");
// 		statesContainer.innerHTML = '';
// 	if (firstnames !== undefined){
// 		renderSelectedBundesstates(firstnames,statesContainer);	   
		
// 		} else{
// 		renderAllBundesstates(statesContainer);
// 	};
// }*/

// function returnStatesHTML(firstname,i, populationwithcomma) {
// 	let emails = allUsers[i].email;
//     return /*html*/ `
    
// <div class="state-width"><a class="state-url" href="${emails}" target="_blank">
//  <div class="state-container"><h2>${firstname}</h2>
//      <span class="population">${populationwithcomma} Mio</span>
//  </div>
// </div>
// `;
// }

// function renderContactsPerLetter(firstnames,contactsContainer){
// 	for (let i = 0; i < firstnames.length; i++) {
// 		let firstname = firstnames[i];
//     definitionOfContactInfo(contactsContainer, i,firstname);
// 	}
// }
	
// function returnSelectedPopulation(firstname) {
//     for (let user of firstnames) {
//         if (user.firstname === firstname) {
//             return user.familyname;
//         }
//     }
//     return "unknown";
// }

// function renderAllContacts(contactsContainer){
// 	const uniqueInitials = getUniqueInitials(firstnames);
// 	    for (let i = 0; i < firstnames.length; i++) {
// 			let firstname = firstnames[i];
//         definitionOfContactInfo(contactsContainer, i, firstname);
// 		}
// 	    findAllFirstLettersOfContacts();
// }

// function definitionOfContactInfo(contactsContainer, i,firstname){
	
//         let familyname = allContacts[i].familyname;
//         // populationx = Number.parseFloat(populationx).toFixed(1);
//         // let populationwithcomma = populationx.replace(".", ",");
//      contactsContainer.innerHTML += returnContactHTML(`${firstname}`,i, familyname);
// }

// function findAllFirstLettersOfContacts() {
// 	  const uniqueInitialsSet = new Set();
// 	  let findInitial = document.getElementById("allContacts");
// 		findInitial.innerHTML = '';
    
//     for (let i = 0; i < contactlist.length; i++) {
//         const initial = contactlist[i].firstname[0];
//         if (!uniqueInitialsSet.has(initial)) {
//             uniqueInitialsSet.add(initial);
// 			let initialHeadline = document.createElement("h4");
//             initialHeadline.innerText = initial;
//             initialHeadline.classList.add("bold");
//             //initialButton.addEventListener("click", function () {
//              //   let statename = filterByInitial(initial);
//             //});
//              findInitial.appendChild(initialHeadline);
// 		}
// 	}
// }

// function getUniqueInitials(firstnames) {
//     let initials = firstnames.map(function(item) {
//         return item.charAt(0).toUpperCase();
//     });
//     return Array.from(new Set(initials));
// }

// function filterByInitial(initial) { 
// 	let namesWithInitial = firstnames.filter(function(firstnames){
//     return firstnames.charAt(0).toUpperCase() === initial;
// 	});
// 	treatContacts(namesWithInitial);
// }




// renderContacts()



// async function contactInit(){
//     renderContacts();
//     let resp = await fetch('../user_storage.js');
//     allUsers = await resp.json();
//     findAllFirstLettersOfFirstnames();
// }

// function findAllFirstLettersOfFirstnames(){
    
//     let contactPanel = document.getElementdById('allContacts');
//     contactPanel.innerHTML = '';
//     // sobald der CurrentUser global definiert ist, hier eine If-Abfrage einbauen, die die ProjektId von CurrentUser abfragt 
//     // und nur die User aufnehmen, die die gleiche ProjectId haben
//     for (let i = 1; i < contactlist.length; i++){
//         const contact = contactlist[i];
//         const firstname = contact['firstname'];
//         contactPanel.innerHTML += generateContactBox(contact,firstname,i);
//         const firstLetter = firstname.charAt(0);
//         if(letters.includes(firstLetter)){
//             letters.push(firstLetter);
//         }
//         renderLetters(firstLetter);
//     }
    
// }

// function generateContactBox(contact, firstname, i){
//     let lastname = contact.familyname;
  
//     let email = contact.email;
// return  `
//     <div id="user${i}" class="users">
//     <div class="user-circle">AW</div>
//     <div class="contact-name">
//       <h5>${firstname} ${lastname}</h5>
//       <span>${email}</span>
//   </div>
// </div>
// `;

// }

// function renderLetters(firstLetter){
//     let Letterbox = document.getElementById(`letterbox${firstLetter}`);
//     Letterbox.innerHTML= '';
//     for (let index = 0; index < letters.length; index++){
//         const element = letters[index];
//         Letterbox.innerHTML += `
//             <div id=${firstLetter}><h4 class="bold">${firstLetter}</h4></div>
//         `;

//     }

// }


// // async function init(){
// //     let resp = await fetch('../user_storage.js');
// //     allUsers = await resp.json();
// //     renderUser();
// // }
// // function findAllFirstLettersOfStates() {
// //     const uniqueInitialsSet = new Set();
// //       
// //     let contactContainer = document.getElementById("allContacts");
// // //    let findInitial = document.getElementById("allInitials");
// // //      findInitial.innerHTML = '';
// //   for (let i = 0; i < allUsers.length; i++) {
// //       const initial = allUsers[i].firstname[0];
// //       if (!uniqueInitialsSet.has(initial)) {
// //           uniqueInitialsSet.add(initial);
// //           let alphabetLetter = document.createElement("div");
// //           alphabetLetter.innerText = initial;
// //           alphabetLetter.classList.add("initial-headline");
// //           alphabetLetter.innerHTML = `
         
// //           `;
// //            findInitial.appendChild(alphabetLetter);
// //       }
// //   }
// // }