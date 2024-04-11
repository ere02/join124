

const firstnames = allUsers.map(item => item.firstname);
const familynames = allUsers.map(item => item.familyname);
const nickname = allUsers.map(item => item.nickname);
const emails = allUsers.map(item => item.email);


function renderContacts(){

    return /*html*/ `

<div id="contactList" class="sidepanel">

<button id="addContact"><h5 class="bold">Add new Contact</h5> <img src="../assets/svg/person_add_white.svg" class="icon"></button>

<div id="allContacts">
    
<h4 class="letter">A</h4>
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


    `;

}

function loadUserInfo(){


}


function findAllFirstLettersOfStates() {
    const uniqueInitialsSet = new Set();
    let contactContainer = document.getElementById("allContacts");
    let findInitial = document.getElementById("allInitials");
      findInitial.innerHTML = '';
  for (let i = 0; i < allUsers.length; i++) {
      const initial = allUsers[i].nickname[0];
      if (!uniqueInitialsSet.has(initial)) {
          uniqueInitialsSet.add(initial);
          let alphabetLetter = document.createElement("div");
          alphabetLetter.innerText = initial;
          alphabetLetter.classList.add("initial-headline");
          alphabetLetter.innerHTML = `
         
          `;
           findInitial.appendChild(alphabetLetter);
      }
  }
}