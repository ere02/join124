let users = []; 

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
  const nameInput = document.getElementById('name-reg');
  const emailInput = document.getElementById('email-reg');
  const passwordInput = document.getElementById('password-reg');
  const confirmPasswordInput = document.getElementById('confirmPassword-reg');
  const agreeCheckbox = document.getElementById('agree-reg');
  const registerBtn = document.getElementById('registerBtn');
  
  if (
    nameInput.value &&
    emailInput.value && 
    passwordInput.value && 
    confirmPasswordInput.value && 
    passwordInput.value === confirmPasswordInput.value &&
    agreeCheckbox.checked
  ) {
    registerBtn.disabled = true;
    try {
      // Don't use setItem to store user data locally (insecure)
      // You would typically send user data to the server for secure storage
      
      // Hash the password before sending (recommended)
      const hashedPassword = hashPassword(passwordInput.value); // Implement password hashing function
      console.log(hashedPassword)
      const user = {
        name: nameInput.value.trim(), // Trim leading/trailing whitespace
        email: emailInput.value.toLowerCase().trim(), // Normalize email (optional)
        password: hashedPassword,
        confirmPassword: hashedPassword,
      };
    
    users.push(user);
    // Add the user object to the users array

// Log the user object to the console
console.log(user);
      const response = await setItem('users', JSON.stringify(users)); // Send to server
      if (response.status === 'success') {
        alert('You are registered');

        renderLogin();
        storage();
        
        console.log(user);   
      } 
      console.log('users', users)
    } catch (error) {
      alert('Registration failed');
    }
  } else {
    alert('Passwords do not match');
  }

  resetForm(nameInput, emailInput, passwordInput, confirmPasswordInput, registerBtn); // Reset the form after submission


function resetForm(nameInput, emailInput, passwordInput, confirmPasswordInput, registerBtn) {

  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  registerBtn.disabled = true; // Disable the button after form submission
}

// Implement a password hashing function (replace with your chosen hashing algorithm)
function hashPassword(password) {
  // ... your hashing implementation here ...
  return password; // Replace with actual hashed password
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

await function showSignUp() {
  // Get the element with class "new-user"
  const newUserDiv = document.querySelector('.new-user');

  // Hide the element using style.display
  newUserDiv.style.display = 'none';

  let content = document.getElementById('content');
  content.innerHTML = generateSignUpHTML();
};

// Todos: button disable/enable, password hashing, error handling, //