let users = [];

async function loadUsers() {
    console.log(`test`)
  try {
    users = JSON.parse(await getItem('users'));
    console.log(users)
  } catch (e) {
    console.error('Loading error:', e);
  }
}

async function loadUserTasks() {
  try {
    const tasks = JSON.parse(await getItem('tasks'));
    users.forEach((user) => {
      user.tasks = tasks.filter((task) => task.userId === user.id);
    });
  } catch (e) {
    console.error('Loading error:', e);
  }
}

async function register() {
  const nameInput = document.getElementById('name_reg');
  const emailInput = document.getElementById('email_reg');
  const passwordInput = document.getElementById('password_reg');
  const confirmPasswordInput = document.getElementById('confirmPassword_reg');
  const agreeCheckbox = document.getElementById('agree_reg');

  if (
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value &&
    passwordInput.value === confirmPasswordInput.value &&
    agreeCheckbox.checked
  ) {
  
    const hashedPassword = hashPassword(passwordInput.value);
    const user = {
      name: nameInput.value.trim(),
      email: emailInput.value.toLowerCase().trim(),
      password: hashedPassword,
    };
    console.log(users);
    users.push(user);
    console.log(user);
    
    try {
      const response = await setItem('users',users);
console.log(response)
      if (response.status === 'success') {
        alert('You are registered');
        renderLogin();
        storage();
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('Registration failed');
    }
  } else {
    alert('Passwords do not match or form is incomplete');
    return; // Exit the function if validation fails
  }

  resetForm(); // Reset the form after successful submission
}

function resetForm() {
  document.getElementById('name_reg').value = '';
  document.getElementById('email_reg').value = '';
  document.getElementById('password_reg').value = '';
  document.getElementById('confirmPassword_reg').value = '';
  document.getElementById('agree_reg').checked = false;
  document.getElementById('registerBtn').disabled = true;
}

function hashPassword(password) {
  // Implement a real hashing algorithm here
  return password; // Replace with actual hashed password
}

function showSignUp() {
  const newUserDiv = document.querySelector('.new-user');
  newUserDiv.style.display = 'block'; // Assuming we want to show the sign-up form

  let content = document.getElementById('content');
  content.innerHTML = generateSignUpHTML(); // Assuming generateSignUpHTML is defined elsewhere
}