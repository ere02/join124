let users = [];


async function init(){
    loadUsers();
}

const registerBtn = document.getElementById('registerBtn'); // Get reference to the button

registerBtn.addEventListener('click', async function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const privacyPolicyCheckbox = document.getElementById('police');

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (!privacyPolicyCheckbox.checked) {
        alert('Please accept the privacy policy');
        return;
    }

    try {
        register(); // Call your existing register function
        alert('Registration Successful!'); 
    } catch(e) {
        console.error('Registration Error:', e);
        alert('There was an error during registration.');
    }
});

async function loadUsers(){
    try {
        users = JSON.parse(await getItem('users'));
    } catch(e){
        console.error('Loading error:', e);
    }
}


async function register() {
    registerBtn.disabled = true;
    users.push({
        email: email.value,
        password: password.value,
    });
    await setItem('users', JSON.stringify(users));
    resetForm();

    const existingUser = users.find(user => user.email === email.value);
    if (existingUser) {
        alert('A user with this email already exists.');
        registerBtn.disabled = false; // Re-enable button
        return;
    }


}

function resetForm() {
    email.value = '';
    password.value = '';
    registerBtn.disabled = false;
}
