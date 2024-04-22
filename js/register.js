let users = [];

async function init() {
  loadUsers();
}

async function loadUsers() {
  users = await getItem('users');
}

async function register() {
  registerBtn.disabled = true;
  users.push({
    email: email.value,
    password: password.value,
  });

  await setItem('users', JSON.stringify(users));

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  if (
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value
  ) {
    if (passwordInput.value === confirmPasswordInput.value) {
      try {
        await setItem(emailInput.value, passwordInput.value);
        alert('You are registered');
        renderLogin();
      } catch (error) {
        alert('Registration failed');
      }
    } else {
      alert('Passwords do not match');
    }
  } else {
    alert('Please fill in all fields');
  }

  resetForm();
}

function resetForm() {
  email.value = '';
  password.value = '';
  registerBtn.disabled = false;
}
