let count = 0;
let timerStarted = false;
const loginButton = document.getElementById("login");
const rootElement = document.querySelector(".root");

loginButton.addEventListener("click", function () {
  count++;

  // Start the timer only on the first click
  if (!timerStarted) {
    timerStarted = true;

    setTimeout(() => {
      if (count >= 5) {
        rootElement.style.display = "none"; // Hide the div
        loadReactApp(); // Load React login page
      }
      count = 0; // Reset count
      timerStarted = false;
    }, 5000);
  }
});

function loadReactApp() {
  const App = () => {
    return React.createElement(
      "div",
      { style: { textAlign: "center", marginTop: "50px" } },
      React.createElement("h2", null, "Login Page"),
      React.createElement("input", {
        type: "text",
        placeholder: "Username",
        style: { display: "block", margin: "10px auto", padding: "5px" },
      }),
      React.createElement("input", {
        type: "password",
        placeholder: "Password",
        style: { display: "block", margin: "10px auto", padding: "5px" },
      }),
      React.createElement(
        "button",
        { style: { padding: "8px 15px", cursor: "pointer" } },
        "Login"
      )
    );
  };

  const reactRoot = document.createElement("div");
  document.body.appendChild(reactRoot);

  const root = ReactDOM.createRoot(reactRoot);
  root.render(React.createElement(App));
}
// function loginPage() {
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   let message = document.getElementById("message");

//   // Hardcoded credentials (for demo purposes)
//   let correctUsername = "admin";
//   let correctPassword = "12345";

//   if (username === correctUsername && password === correctPassword) {
//     alert("Login successful!");
//     message.style.color = "green";
//     message.textContent = "Login successful!";
//     // Redirect to another page (optional)
//     // window.location.href = "dashboard.html";
//   } else {
//     message.style.color = "red";
//     message.textContent = "Invalid username or password!";

//     // Append to <head>
//     document.head.removeChild(link);
//     root.style.display = "block";
//     login.style.display = "none";
//   }
// }

// var root = document.getElementsByClassName("root")[0];
// var login = document.getElementsByClassName("login")[0];
// function hideRoot() {
//   if (root) {
//     root.style.display = "none";
//     login.style.display = "flex ";
//     // Create a <link> element
//     let link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "styles.css"; // Path to your CSS file

//     // Append to <head>
//     document.head.appendChild(link);
//   }
//   loginPage();
// }
