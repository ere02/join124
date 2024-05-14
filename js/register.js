let users = [];

async function init() {
  await loadUsers();
  await loadUserTasks();
  // Assuming allTasks is an async function that needs to be awaited.
  await allTasks(); 
}

async function loadUsers() {
  try {
    users = JSON.parse(await getItem('users'));
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

async function register(event) {
  event.preventDefault(); // Prevent default form submission

  const nameInput = document.getElementById('name-reg');
  const emailInput = document.getElementById('email-reg');
  const passwordInput = document.getElementById('password-reg');
  const confirmPasswordInput = document.getElementById('confirmPassword-reg');
  const agreeCheckbox = document.getElementById('agree-reg');
  const registerBtn = document.getElementById('registerBtn');

  checkFormCompletion(); // Call this function to check form completion and enable/disable the register button

  if (
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value &&
    passwordInput.value === confirmPasswordInput.value &&
    agreeCheckbox.checked
  ) {
    try {
      const hashedPassword = hashPassword(passwordInput.value);
      const user = {
        name: nameInput.value.trim(),
        email: emailInput.value.toLowerCase().trim(),
        password: hashedPassword,
      };

      users.push(user);
      console.log(user);

      const response = await sendUserData(user);

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
  document.getElementById('name-reg').value = '';
  document.getElementById('email-reg').value = '';
  document.getElementById('password-reg').value = '';
  document.getElementById('confirmPassword-reg').value = '';
  document.getElementById('agree-reg').checked = false;
  document.getElementById('registerBtn').disabled = true;
}

function hashPassword(password) {
  // Implement a real hashing algorithm here
  return password; // Replace with actual hashed password
}

function checkFormCompletion() {
  const nameInput = document.getElementById('name-reg');
  const emailInput = document.getElementById('email-reg');
  const passwordInput = document.getElementById('password-reg');
  const confirmPasswordInput = document.getElementById('confirmPassword-reg');
  const agreeCheckbox = document.getElementById('agree-reg');
  const registerBtn = document.getElementById('registerBtn');

  registerBtn.disabled = !(
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value &&
    agreeCheckbox.checked
  );
}

function showSignUp() {
  const newUserDiv = document.querySelector('.new-user');
  newUserDiv.style.display = 'block'; // Assuming we want to show the sign-up form

  let content = document.getElementById('content');
  content.innerHTML = generateSignUpHTML(); // Assuming generateSignUpHTML is defined elsewhere
}

// Assuming getItem and sendUserData are defined elsewhere