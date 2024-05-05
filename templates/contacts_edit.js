function editUserInfo(i) {
  let container = document.getElementById("editableContact");

  container.innerHTML = /*html*/ `
    <div class="firstDIV">
      <div id="leftSide"></div>
     <div id="rightSide"></div>
    </div>
  `;

  renderRightSide(i);
  renderLeftSide(i);
}

function renderLeftSide(i) {
  document.getElementById("leftSide").innerHTML = `
  <img src="../assets/svg/logo_light.svg" class="marginBottom30px">
  <h2 id="contactLine" class="white lineheight1"></h2>
  <h4 id="contactSubLine" class="white"></h4>
  <hr class="short-cyan">
  `;
  let contactLine = document.getElementById("contactLine");
  let contactSubLine = document.getElementById("contactSubLine");
  if (i !== null){
    contactLine.innerHTML = 'Edit contact';
  } else {

    contactLine.innerHTML = 'Add contact';
    contactSubLine.innerHTML = 'Tasks are better with a Team!';
    
  }
  
}

function renderRightSide(i) {
  let containerRight = document.getElementById("rightSide");
 // let editLayer = document.getElementById("editLayer");

  containerRight.innerHTML = /*html*/ `
    <div class="closeEdit">
      <img class="closeIMG" src="../assets/svg/close.svg" alt="Schließen" onclick="toggleEditLayer(${i})" />
    </div>
    <div class="rightSideContent">
      <div class="letter-box">
        <div class="user-circle size120px" style="background-color:${personalColor}"><h3>${initial}${initialLastname}</h3></div>
      </div>
      <form class="contactForm">
        <div class="input-wrapper">
          <input id="name" class="input-field" type="name" name="name" placeholder="Name" required />
            <img src="../assets/svg/person.svg" alt="lock icon" class="icon" />
        </div>
        <div class="input-wrapper">
          <input id="email" class="input-field" type="email" name="email" placeholder="E-mail" required />
          <img src="../assets/svg/mail.svg" alt="lock icon" class="icon" />
        </div>
        <div class="input-wrapper">
          <input id="phone" class="input-field" type="phone" name="phone" placeholder="Phonenumber" required />
          <img src="../assets/svg/call.svg" alt="lock icon" class="icon" />
        </div>
        <div class="submit-container" id="submit">
        </div>
      </form>
    </div>
  `;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
 let button = document.getElementById("submit");

 button.innterHTML = /*html*/`
 <button class="button-guest" type="submit" onclick="resetContactForm(nameInput, emailInput, phoneInput)"><h5>Delete</h5></button>
 <button class="button" type="submit"><h5>Save</h5></button>
 `;
  if (i === null){
    resetContactForm(nameInput, emailInput, phoneInput);
 } else {

    nameInput.value = `${firstname}` + " " + `${familyname}`;
  emailInput.value = `${email}`;
  phoneInput.value = `${phone}`;
 }


}

function resetContactForm(nameInput, emailInput, phoneInput) {

  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
}

