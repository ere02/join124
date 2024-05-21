let users = [];
let getUsersResponse;

async function loadUsers() {
  try {
    getUsersResponse = await getItem('/users');
    let keys = Object.keys(getUsersResponse);
    let lastKey = keys[keys.length - 1];
    let lastEntry = getUsersResponse[lastKey];
    if (lastEntry) {
      users = lastEntry;
    } else {
      users = [];
    }
    /*     users = lastEntry ? lastEntry : []; */ //kurzschreibweise
  } catch (e) {
    console.error('Loading error:', e);
  }
}

async function register() {
  const nameInput = document.getElementById('name_reg');
  const emailInput = document.getElementById('email_reg');
  const passwordInput = document.getElementById('password_reg');

  if (isFormValid(nameInput, emailInput, passwordInput)) {
    for (let i = 0; i < users.length; i++) {
      if (users[i]['email'] == emailInput.value) {
        alert('user is known'); //overlay bauen, kein alert!
        return;
      }
    }
    const hashedPassword = hashPassword(passwordInput.value);

    users.push({
      name: nameInput.value,
      email: emailInput.value,
      password: hashedPassword,
    });

    try {
      handleSignUp();
    } catch (error) {
      alert('Registration failed'); //overlays bauen, kein alert!
      resetForm(); // Reset the form after fail
    }
  } else {
    alert('Passwords do not match or form is incomplete'); //overlays bauen, kein alert!
    return; // Exit the function if validation fails
  }
}
function isFormValid(nameInput, emailInput, passwordInput) {
  const confirmPasswordInput = document.getElementById('confirmPassword_reg');
  const agreeCheckbox = document.getElementById('agree_reg');

  return (
    nameInput.value &&
    emailInput.value &&
    passwordInput.value &&
    confirmPasswordInput.value &&
    passwordInput.value === confirmPasswordInput.value &&
    agreeCheckbox.checked
  );
}

function togglePw(id, imageID) {
  let pwField = document.getElementById(id);
  let imageField = document.getElementById(imageID);
  if (pwField.type === 'password') {
    pwField.type = 'text';
    imageField.src = '../assets/svg/visibility.svg';
  } else {
    pwField.type = 'password';
    imageField.src = '../assets/svg/visibility_off.svg';
  }
}

async function handleSignUp() {
  await setItem('/users', users);
  await loadUsers();
  await deleteOldUsersEntry();
  //generate overlay you are registered//
  resetForm();
  renderLogin();
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

async function deleteOldUsersEntry() {
  let keys = Object.keys(getUsersResponse);
  let lastKey = keys[keys.length - 1];
  for (let i = 0; i < keys.length; i++) {
    if (lastKey != keys[i]) {
      await deleteData('/users/' + keys[i]);
    }
  }
}

/* async function loadUserTasks() {
  try {
    const tasks = JSON.parse(await getItem('tasks'));
    users.forEach((user) => {
      user.tasks = tasks.filter((task) => task.userId === user.id);
    });
  } catch (e) {
    console.error('Loading error:', e);
  }
} */
