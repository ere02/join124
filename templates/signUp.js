function signUp() {
  // Get the element with class "new-user"
  const newUserDiv = document.querySelector('.new-user');

  // Hide the element using style.display
  newUserDiv.style.display = 'none';

  let content = document.getElementById('content');
  content.innerHTML = /*html*/ `
  <div class="input-container-signUp">
  <div class="signup-wrapper">
    <div class="input-container-signup">
      <div class="headline-wrapper-signup">
        <div onclick="renderLogin()">
          <img src="/assets/svg/arrow-left-line.svg" alt="" class="arrow-icon" />
        </div>
        <div class="headline-wrapper">
          <p class="headline">Sign up</p>
          <hr class="underline" />
        </div>
      </div>
      <div class="input-wrapper">
        <form onsubmit="register(); return false;">
          <input id="name" class="input-field" type="text" name="name" placeholder="Name" required />
          <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
      </div>
      <div class="input-wrapper">
        <input id="email" class="input-field" type="email" name="email" placeholder="email" required />
        <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
      </div>
      <div class="input-wrapper">
        <input id="password" class="input-field" type="password" name="password" placeholder="Password" required />
        <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
      </div>
      <div class="input-wrapper">
        <input id="confirmPassword" class="input-field" type="password" name="confirmPassword"
          placeholder="Confirm Password" required />
        <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
      </div>
      <div class="checkbox-container">
        <input type="checkbox" name="police" id="police" />
        <label for="remember">I accept the <a href="#">Privacy policy</a></label>
      </div>
      <div class="submit-container">
        <button id="registerBtn" class="button" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</div>
  `;
}
