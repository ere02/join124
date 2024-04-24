

function editUserInfo(){
  let container = document.getElementById("start-container");
  
  container.innerHTML = /*html*/ `
  <form>
        <div class="letter-box">
          <img src="/assets/svg/letter-box.svg" alt="email icon" class="icon" />
        </div>
        <div>
          <img src="/assets/svg/close.svg" alt="Letter icon" class="icon" />
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
        </div>
      <div class="submit-container" id="submit">
        <button class="button-guest" type="submit">Delete</button>
        <button class="button" type="submit">Save</button>
      </div>
    </form>
  `;
}

// module.exports = generateEditContactHTML;