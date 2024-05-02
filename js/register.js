let users = []; // Not recommended for real applications due to security concerns
/* await */ init();
{
}
async function register(event) {
  event.preventDefault(); // Prevent default form submission behavior

  registerBtn.disabled = true;

  // Get element references using modern techniques (querySelector)
  const nameInput = document.querySelector('name-reg');
  const emailInput = document.querySelector('email-reg');
  const passwordInput = document.querySelector('password-reg');
  const confirmPasswordInput = document.querySelector('confirmPassword-reg');
  const agreeCheckbox = document.querySelector('agree-reg');

  // Validate input values (add validation logic as needed)
  // ... your validation logic here ...

  // Assuming validation passes, create a user object with normalized data
  const user = {
    name: nameInput.value.trim(), // Trim leading/trailing whitespace
    email: emailInput.value.toLowerCase().trim(), // Normalize email (optional)
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
  };

  // Check if agreeCheckbox is checked
  if (!agreeCheckbox.checked) {
    // Handle the case where the user hasn't agreed to terms
    // ... display an error message or prevent registration ...
    return;
  }

    const users = await getItem('users') || []; // Get existing users (or initialize if none)
    users.push(user);
    await setItem('users', JSON.stringify(users));
    resetForm();
  } 
  try {
    // Code that may throw an error
  } catch (error) {
    // Handle storage errors gracefully
    console.error('Error saving user data:', error);
    // ... display an error message to the user ...
  } finally {
    registerBtn.disabled = false; // Enable the button again regardless of success/failure
  }

async function init() {
  loadUsers();
}

async function loadUsers() {
  try {
    users = JSON.parse(await getItem('users'));
  } catch (e) {
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
          const user = {
            name: nameInput.value.trim(), // Trim leading/trailing whitespace
            email: emailInput.value.toLowerCase().trim(), // Normalize email (optional)
            password: hashedPassword,
            confirmPassword: hashedPassword,
          };
          users.push(user);
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

function showSignUp() {
  // Get the element with class "new-user"
  const newUserDiv = document.querySelector('.new-user');

  // Hide the element using style.display
  newUserDiv.style.display = 'none';

  let content = document.getElementById('content');
  content.innerHTML = generateSignUpHTML();
}
