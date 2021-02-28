/**
 * @file register.js
 * @author Sanjay Sunil
 * @license MIT
 */

function registration() {
  console.log('Attempting to register user ...')
  var user_email = document.getElementById("user_email").value;
  var user_password = document.getElementById("user_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  if (user_password !== confirm_password) {
    new Noty({
      type: 'error',
      theme: "nest",
      closeWith: ['button'],
      text: "Passwords do not match!",
      timeout: 5000,
      progressBar: true
    }).show();
  } else {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(user_email, user_password);
    promise.catch((err) =>
      new Noty({
        type: 'error',
        theme: "nest",
        closeWith: ['button'],
        text: err.message,
        timeout: 5000,
        progressBar: true
      }).show());
  }
}