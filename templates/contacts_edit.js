


// document.addEventListener("click", function(event) {
//   const form = document.querySelector("aniEditForm");
//   const layer = document.getElementById("editLayer")
//   if (!form.contains(event.target)) {
//       layer.classList.add("displaynone");
//   }
// });

function editUserInfo(i){
  let container = document.getElementById("editableContact");
  
 container.innerHTML = /*html*/ `
  <div class="firstDIV">
    <div id="leftSide"></div>
    <div id="rightSide"></div>
  </div>
  `;

  renderRightSide(i);
  renderLeftSide();
}

function renderLeftSide(){
  document.getElementById("leftSide").innerHTML = `
  <img src="/assets/svg/logo_light.svg" class="marginBottom30px">
  <h2 class="white">Edit contact</h2>
  <hr class="short-cyan">
  `;
}

function renderRightSide(i){
  let containerRight = document.getElementById("rightSide");

  containerRight.innerHTML = /*html*/ `
    <div class="closeEdit">
            <img class="closeIMG" src="/assets/svg/close.svg" alt="Schließen" />
          </div>
          <div class="rightSideContent">
 <div class="letter-box">
        <div class="user-circle size120px" style="background-color:${personalColor}"><h3>${initial}${initialLastname}</h3></div>
        </div>
  <form class="contactForm">
 
          <div class="input-wrapper">
            <input class="input-field" type="name" name="password" placeholder="Name" required />
            <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
          </div>
          <div class="input-wrapper">
            <input class="input-field" type="email" name="email" placeholder="E-mail" required />
            <img src="/assets/svg/mail.svg" alt="lock icon" class="icon" />
          </div>
          <div class="input-wrapper">
            <input class="input-field" type="phone" name="phone" placeholder="Phonenumber" required />
            <img src="/assets/svg/call.svg" alt="lock icon" class="icon" />
          </div>
      <div class="submit-container" id="submit">
        <button class="button-guest" type="submit"><h5>Delete</h5></button>
        <button class="button" type="submit"><h5>Save</h5></button>
      </div>
    </form>
</div>
  `;
}



// module.exports = generateEditContactHTML;