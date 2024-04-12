function loginPage() {
  return `
    <div class="login-page">
      <div class="login-header">
        <div></div>
        <div class="new-user">
          <span>Not a Join user?</span>
          <button class="button" id="signUp" onclick="signup()">
            Sign up
          </button>
        </div>
      </div>
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
          <button class="button" type="submit">Log in</button>
          <button class="button-guest" type="submit">Guest Log in</button>
        </div>
      </div>
      <div class="login-footer">
        <span class="legal-notice-link" onclick="callFramePageSinLogin('privacy')">
          Privacy Policy</span><span class="legal-notice-link" onclick="callFramePageSinLogin('legal')">Legal notice</span>
      </div>
    </div>
  `;
}
