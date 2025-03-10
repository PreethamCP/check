function loginPage() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  // Hardcoded credentials (for demo purposes)
  let correctUsername = "admin";
  let correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    alert("Login successful!");
    message.style.color = "green";
    message.textContent = "Login successful!";
    // Redirect to another page (optional)
    // window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";

    // Append to <head>
    document.head.removeChild(link);
    root.style.display = "block";
    login.style.display = "none";
  }
}

var root = document.getElementsByClassName("root")[0];
var login = document.getElementsByClassName("login")[0];
function hideRoot() {
  if (root) {
    root.style.display = "none";
    login.style.display = "flex ";
    // Create a <link> element
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css"; // Path to your CSS file

    // Append to <head>
    document.head.appendChild(link);
  }
  loginPage();
}

let count = 0;
let timerStarted = false;

const loginButton = document.getElementById("login");

loginButton.addEventListener("click", function () {
  count++;

  // Start the timer only on the first click
  if (!timerStarted) {
    timerStarted = true;

    setTimeout(() => {
      // Check if the count reached 5 within the 5-second period
      if (count == 5) {
        hideRoot();
      }
      // Reset count and allow a new timer
      count = 0;
      timerStarted = false;
    }, 5000);
  }
});
