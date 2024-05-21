//Signup 
function generateSignUpHTML() {
  
    return /*html*/ `
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
          <div class="inpnput-container">
          <form onsubmit="register(); return false;" class="formRegister">
            <div class="input-wrapper">
              <input id="name_reg" class="input-field" type="text" name="name" placeholder="Name" required />
              <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
            </div>
            <div class="input-wrapper">
              <input id="email_reg" class="input-field" type="email" name="email" placeholder="email" required />
              <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
            </div>
            <div class="input-wrapper">
              <input id="password_reg" class="input-field" type="password" minlength="7" name="password" placeholder="Password"
              required />
              <img src="/assets/svg/visibility_off.svg" id="lockpic" alt="lock icon" class="icon" onclick="togglePw('password_reg','lockpic')"/>
            </div>
            <div class="input-wrapper">
              <input id="confirmPassword_reg" class="input-field" type="password" name="confirmPassword"
              placeholder="Confirm Password" required />
              <img src="/assets/svg/visibility_off.svg" id="lockpicConfirm" alt="lock icon" class="icon" onclick="togglePw('confirmPassword_reg','lockpicConfirm')" />
            </div>
            <div class="checkbox-container">
              <input type="checkbox" name="police" id="agree_reg" />
              <label for="remember">I accept the <a href="#">Privacy policy</a></label>
            </div>
            <div class="submit-container">
              <button id="registerBtn" class="button" type="submit  "><h5>Sign up</h5></button>
            </div>
          </form>
        </div>
      </div>
    </div>`
}
//LogIn

function loginPage() {
  return `

      <div class="input-container-login">
        <div class="headline-wrapper">
          <p class="headline">Log in</p>
          <hr class="underline" />
        </div>
        <div class="input-wrapper">
          <input class="input-field" type="text" name="email" id="email" placeholder="E-mail" required />
          <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
        </div>
        <div class="input-wrapper">
          <input class="input-field" type="password" name="password" id="password" placeholder="Password" required />
          <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember me</label>
        </div>
        <div class="submit-container" id="submit">
          <button class="button" type="submit"><h5>Log in</h5></button>
          <button class="button-guest" type="submit"><h5>Guest Log in</h5></button>
        </div>
      </div>
      <div class="login-footer">
        <span class="legal-notice-link" onclick="callFramePageSinLogin('privacy')">
          Privacy Policy</span><span class="legal-notice-link" onclick="callFramePageSinLogin('legal')">Legal notice</span>
      </div>
    </div>
  `;
}