function signUp() {
  let content = document.getElementById('content');
  content.innerHTML =`

      <div class="signup-wrapper">
        <div class="input-container-signup">
          <div class="headline-wrapper-signup">

          <img
          src="/assets/svg/arrow-left-line.svg"
          <div class="go-back-arrow" onclick="goMainPage()">
              alt=""
              class="arrow-icon"
          /*     onclick="window.location.href='index.html'" */
            />
            <div>
              <p class="headline">Sign up</p>
              <hr class="underline" />
            </div>
          </div>
          <div class="input-wrapper">
            <input
              id="name"
              class="input-field"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
          </div>
          <div class="input-wrapper">
            <input
              id="email"
              class="input-field"
              type="text"
              name="email"
              placeholder="email"
              required
            />
            <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
          </div>
          <div class="input-wrapper">
            <input
              id="password"
              class="input-field"
              type="text"
              name="password"
              placeholder="Password"
              required
            />
            <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
          </div>
          <div class="input-wrapper">
            <input
              id="confirmPassword"
              class="input-field"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="police" id="police" />
            <label for="remember"
              >I accept the <a href="#">Privacy policy</a></label
            >
          </div>
          <div class="submit-container" id="submit">
            <button class="button" type="submitLogin">Sign up</button>
          </div>
        </div>
      </div>

  `;
}
