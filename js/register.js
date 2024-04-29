let users = []; // Not recommended for real applications due to security concerns

let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');

// Add event listeners to input fields
nameInput.addEventListener('input', checkFormCompletion);
emailInput.addEventListener('input', checkFormCompletion);
passwordInput.addEventListener('input', checkFormCompletion);
confirmPasswordInput.addEventListener('input', checkFormCompletion);

async function init() {
  loadUsers();
}

async function loadUsers() {
  try {
    users = JSON.parse(await getItem('users'));
  } catch(e){
    console.error('Loading error:', e);
  }
}

async function register() {
  registerBtn.disabled = true;
  
  if (
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value
  ) {
    if (passwordInput.value === confirmPasswordInput.value) {
      try {
        // Don't use setItem to store user data locally (insecure)
        // You would typically send user data to the server for secure storage

        // Hash the password before sending (recommended)
        const hashedPassword = hashPassword(passwordInput.value); // Implement password hashing function

        const response = await setItem(emailInput.value, hashedPassword); // Send to server

        if (response.success) {
          alert('You are registered');
          renderLogin();
        } else {
          alert('Registration failed');
        }
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
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  registerBtn.disabled = true; // Disable the button after form submission
}

// Implement a password hashing function (replace with your chosen hashing algorithm)
function hashPassword(password) {
  // ... your hashing implementation here ...
  return 'hashedPassword'; // Replace with actual hashed password
}

function checkFormCompletion() {
  if (
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value
  ) {
    registerBtn.disabled = false; // Enable the button if the form is complete
  } else {
    registerBtn.disabled = true; // Disable the button if the form is incomplete
  }
}