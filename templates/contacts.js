

const firstnames = allUsers.map(item => item.firstname);
const familynames = allUsers.map(item => item.familyname);
const nickname = allUsers.map(item => item.nickname);
const emails = allUsers.map(item => item.email);


function renderContacts(){

    return /*html*/ `

<div id="contactList" class="sidepanel">

<button id="addContact"><h5 class="bold">Add new Contact</h5> <img src="../assets/svg/person_add_white.svg" class="icon"></button>




</div>


    `;

}

function loadUserInfo(){


}


function findAllFirstLettersOfStates() {
    const uniqueInitialsSet = new Set();
    let userContainer = document.getElementById("allUsers");
    let findInitial = document.getElementById("allInitials");
      findInitial.innerHTML = '';
  for (let i = 0; i < allUsers.length; i++) {
      const initial = allUsers[i].nickname[0];
      if (!uniqueInitialsSet.has(initial)) {
          uniqueInitialsSet.add(initial);
          let alphabetLetter = document.createElement("div");
          alphabetLetter.innerText = initial;
          alphabetLetter.classList.add("initial-headline");
          alphabetLetter.addEventListener("click", function () {
              let userPerLetter = filterByInitial(initial);
          });
           findInitial.appendChild(alphabetLetter);
      }
  }
}