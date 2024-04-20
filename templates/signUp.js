function signUp() {
  // Get the element with class "new-user"
  const newUserDiv = document.querySelector('.new-user');

  // Hide the element using style.display
  newUserDiv.style.display = 'none';

  let content = document.getElementById('content');
  content.innerHTML = `
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
          <input id="name" class="input-field" type="text" name="name" placeholder="Name" required />
          <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
        </div>
        <div class="input-wrapper">
          <input id="email" class="input-field" type="text" name="email" placeholder="email" required />
          <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
        </div>
        <div class="input-wrapper">
          <input id="password" class="input-field" type="text" name="password" placeholder="Password" required />
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
        <div class="submit-container" id="submit">
          <button class="button" type="submitLogin">Sign up</button>
        </div>
      </div>
    </div>
  </div>
  `;

  const submitButton = document.querySelector('.button');
  submitButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (nameInput.value && emailInput.value && passwordInput.value && confirmPasswordInput.value) {
      // All input fields have a value
      // Perform sign up logic here
    } else {
      // At least one input field is empty
      // Display an error message or prevent form submission
    }
  });

/*   const goBack = () => {
    window.location.href = 'index.html';
  }; */

/*   const arrowIcon = document.querySelector('.arrow-icon');
  arrowIcon.addEventListener('click', goBack);
  */
}
