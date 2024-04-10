let users = [];

async function init() {
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

    // Create the user object and push into the array
    const newUser = {
        name: name,
        email: email,
        password: password,
    };
    users.push(newUser);

    try {
        await register(); // Call your updated register function
        alert('Registration Successful!');
    } catch (e) {
        console.error('Registration Error:', e);
        alert('There was an error during registration.');
    }
});

async function loadUsers() {
    try {
        const storedUsers = await getItem('users');
        users = storedUsers || []; // Initialize with stored users or an empty array
    } catch (e) {
        console.error('Loading error:', e);
    }
}

async function register() {
    registerBtn.disabled = true;

    try {
        await setItem('users', JSON.stringify(users));  // Store the updated users array 
        alert('Registration Successful!');
    } catch (e) {
        console.error('Registration Error:', e);
        alert('There was an error during registration.');
    } finally {
        resetForm();
        registerBtn.disabled = false; // Re-enable the button
    }
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}

