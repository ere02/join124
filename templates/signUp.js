let users = [];


async function init(){
    loadUsers();
}

async function loadUsers(){
    try {
        users = JSON.parse(await getItem('users'));
    } catch(e){
        console.error('Loading error:', e);
    }
}


async function register() {
    registerBtn.disabled = true;
    users.push({
        email: email.value,
        password: password.value,
    });
    await setItem('users', JSON.stringify(users));
    resetForm();
}

function resetForm() {
    email.value = '';
    password.value = '';
    registerBtn.disabled = false;
}



function rendersignUp(){
    return /*html*/  `
<link rel="stylesheet" href="/css/all_colors.css" />
<link rel="stylesheet" href="/css/style.css" />
<div class="login-page">
  <div class="login-header">
    <img src="/assets/svg/logo_dark.svg" alt="logo" class="logo" />
    <div class="new-user">
      <h4>Not a Join user?</h4>
      <button class="button" id="signUp" onclick="signUp()">Sign up</button>
    </div>
  </div>
  <div class="signup-wrapper">
    <div class="input-container-signup">
      <div class="headline-wrapper-signup">
        <div class="go-back-arrow" onclick="goBack()">
          <img
            src="/assets/svg/arrow-left-line.svg"
            alt="go back"
            class="arrow-icon"
            onclick="window.location.href='index.html'"
            alt="go back"
            class="arrow-icon"
          />
        </div>
        <div>
          <p class="headline">Sign up</p>
          <hr class="underline" />
        </div>
      </div>
      <div class="input-wrapper">
        <input
          class="input-field"
          type="name"
          name="password"
          placeholder="Name"
          required
        />
        <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
      </div>
      <div class="input-wrapper">
        <input
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
          class="input-field"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
      </div>
      <div class="input-wrapper">
        <input
          class="input-field"
          type="password"
          name="confirm password"
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
  <div class="login-footer">
    <a href="#">Privacy Policy</a><a href="#">Legal notice</a>
  </div>
</div>`
}
