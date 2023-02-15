// Login
const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#username");
const loginPassword = document.querySelector("#password");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (loginUsername.value === storedUser.username && loginPassword.value === storedUser.password) {
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password");
  }
});
