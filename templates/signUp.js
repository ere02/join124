function signUp() {
  // Get the element with class "new-user"
  const newUserDiv = document.querySelector('.new-user');

  // Hide the element using style.display
  newUserDiv.style.display = 'none';

  let content = document.getElementById('content');
  content.innerHTML = /*html*/ `
    <form onsubmit="register()">
      <div>
        <input type="text" id="name-reg" placeholder="Name" required>
      </div>
      <div>
        <input type="email" id="email-reg" placeholder="Email" required>
      </div>
      <div>
        <input type="password" id="password-reg" placeholder="Password" required>
      </div>
      <div>
        <input type="password" id="confirmPassword-reg" placeholder="Confirm Password" required>
      </div>
      <div>
        <input type="checkbox" id="agree-reg" required>
        <label for="agree-reg">I agree to the terms and conditions</label>
      </div>
      <button type="submit">Register</button>
    </form>
  `;
}
