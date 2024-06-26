function generateSignUpHTML() {
  // Get the element with class "new-user"
  const newUserDiv = document.querySelector('.new-user');

  // Hide the element using style.display
  newUserDiv.style.display = 'none';

  let content = document.getElementById('content');
  content.innerHTML = /*html*/ `
    <form onsubmit="register()">
      <div>
        <input type="text" id="name-reg" placeholder="Name" required>
        <small></small>
      </div>
      <div>
        <input type="email" id="email-reg" placeholder="Email" required>
        <small></small>
      </div>
      <div>
        <input type="password" id="password-reg" placeholder="Password" required>
        <small></small>
      </div>
      <div>
        <input type="password" id="confirmPassword-reg" placeholder="Confirm Password" required>
        <small></small>
      </div>
      <div>
        <input type="checkbox" id="agree-reg" required>
        <label for="agree-reg">I agree to the terms and conditions</label>
      </div>
      <button id="registerBtn" type="submit">Register</button>
    </form>
  `;
}

