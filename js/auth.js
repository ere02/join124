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

    let splittedName = nameInput.value.split(' ');
    let user = buildUser(splittedName,emailInput.value,hashedPassword);
    users.push(user);

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

function buildUser(splittedName,email,hashedPassword){
  let newUser = {
    id:users.length,
    firstName:splittedName[0],
    familyName:splittedName[1],
    email:email,
    phone:'',
    password:hashedPassword,
    personalColor:generateColorCode()
  }
  return newUser;
}

function generateColorCode(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
/*
Verknüpfung zu inputfield email und password herstellen.
wenn email und PW vorhanden sind bzw Form valide
Values aus den oben genannten inputfeldern ziehen

email validierung


mit User Arrey abgleichen
Hinweis auf Registrierung geben (signUp)
Error handling: wrong username or password als info

weiterleitung auf board.js
*/
function signIn() {
  let email = document.getElementById('email');
  let password = document.getElementById('password');

  if (email.value && password.value) {
    for (let i = 0; i < users.length; i++) {
      if (email.value == users[i].email && password.value == users[i].password) {
        rememberMe();
        console.log('Erfolgreich')
        window.location.href = "./subpages/summary.html"
      } else {
        console.log('user oder PW nicht gefunden')
      }
    }
  }
}

/*handle remember me*/
function rememberMe(){
  let rememberMeCheck = document.getElementById('remember');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
  
    if (rememberMeCheck.checked) {
      // Store username and password in local storage
      localStorage.setItem('email', emailInput.value);
      localStorage.setItem('password', passwordInput.value);
    } else {
      // Remove username and password from local storage
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
}
/*
1. Daten aus dem local storage holen: email: password:
2. verlinkung zu den inputfeldern
3. value in die Inputfeldern ausfüllen
4. wenn was im local storage drin steht dann... 
ansonsten nix
if(){
}
*/
function loadFromLocalStorage(){
  let email = localStorage.getItem('email');/* id='email' */
  let password = localStorage.getItem('password'); /* id='password' */

  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');

  if(email&&password){
    emailInput.value = email;
    passwordInput.value = password;
  }
}
