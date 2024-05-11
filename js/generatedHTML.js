//Signup 
function generateSignUpHTML() {
  
    return /*html*/ `
     <form onsubmit="register();return false;"> 
       <div class="signup-wrapper">
         <input class="input-field" type="text" id="name-reg" placeholder="Name" required>
         <small></small>
       </div> 
       <div>
         <input class="input-field" type="email" id="email-reg" placeholder="Email" required>
         <small></small>
       </div>
       <div>
         <input class="input-field" type="password" id="password-reg" placeholder="Password" required>
         <small></small>
       </div>
       <div>
         <input class="input-field" type="password" id="confirmPassword-reg" placeholder="Confirm Password" required>
         <small></small>
       </div>
       <div>
         <input class="input-field" type="checkbox" id="agree-reg" required>
         <label for="agree-reg">I agree to the terms and conditions</label>
       </div>
       <button id="registerBtn" type="submit">Register</button>
     </form>
   `;
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