export function signUp() {
    // Get the email and password from the input fields.
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create a new user with the given email and password.
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Get the user's ID token.
        userCredential.user.getIdToken().then((token) => {
          // Send the token to the server to register the user.
          // ...
        });
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
      });
  }