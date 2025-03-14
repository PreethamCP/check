var login = document.querySelector(".root");
let timer = false;
let count = 0;

login.addEventListener("click", function () {
  count++;
  if (!timer) {
    timer = true;
    setTimeout(() => {
      if (count === 5) {
        login.style.display = "none";
        loginCredentials();
      }
    }, 1000);
  }
});
function loginCredentials() {
  addStylesheet("./attachments/css/loginStylesheet.css"); // Fixed typo in 'attachments'

  let loginDiv = document.createElement("div");
  loginDiv.className = "login";

  let loginText = document.createElement("h1");
  loginText.textContent = "ADMIN LOGIN";
  loginDiv.appendChild(loginText);

  // User Name Section
  let userDiv = document.createElement("div");
  userDiv.className = "user gen";

  let userLabel = document.createElement("h2");
  userLabel.textContent = "User Name";

  let userInput = document.createElement("input");
  userInput.type = "text";
  userInput.placeholder = "Enter username";

  userDiv.appendChild(userLabel);
  userDiv.appendChild(userInput);
  loginDiv.appendChild(userDiv);

  // Password Section
  let passwordDiv = document.createElement("div");
  passwordDiv.className = "password gen";

  let passwordLabel = document.createElement("h2");
  passwordLabel.textContent = "Password";

  let passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Enter password";

  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);
  loginDiv.appendChild(passwordDiv);

  // Submit Button
  let button = document.createElement("button");
  button.type = "button"; // Corrected type
  button.textContent = "Login";
  loginDiv.appendChild(button);

  // Append to body at the end
  document.body.appendChild(loginDiv);
}

function addStylesheet(url) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  link.id = "loginStylesheet";
  document.head.appendChild(link);
}
// let count = 0;
// let timerStarted = false;
// const loginButton = document.getElementById("login");
// const rootElement = document.querySelector(".root");

// loginButton.addEventListener("click", function () {
//   count++;

//   // Start the timer only on the first click
//   if (!timerStarted) {
//     timerStarted = true;

//     setTimeout(() => {
//       if (count >= 5) {
//         rootElement.style.display = "none"; // Hide the div
//         loadReactApp(); // Load React login page
//       }
//       count = 0; // Reset count
//       timerStarted = false;
//     }, 5000);
//   }
// });

// function loadReactApp() {
//   const { useState } = React;

//   const App = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     function handleLogin() {
//       if (username === "admin" && password === "1234") {
//         setIsLoggedIn(true);
//       } else {
//         setError("Invalid username or password.");
//       }
//     }

//     if (isLoggedIn) {
//       return React.createElement(
//         "div",
//         { style: { textAlign: "center", marginTop: "50px" } },
//         React.createElement("h2", null, `Welcome, ${username}!`),
//         React.createElement("p", null, "You have successfully logged in."),
//         React.createElement(
//           "button",
//           {
//             style: {
//               padding: "8px 15px",
//               cursor: "pointer",
//               marginTop: "10px",
//             },
//             onClick: () => setIsLoggedIn(false),
//           },
//           "Logout"
//         )
//       );
//     }

//     return React.createElement(
//       "div",
//       { style: { textAlign: "center", marginTop: "50px" } },
//       React.createElement("h2", null, "Login Page"),
//       React.createElement("input", {
//         type: "text",
//         placeholder: "Username",
//         value: username,
//         onChange: (e) => setUsername(e.target.value),
//         style: { display: "block", margin: "10px auto", padding: "5px" },
//       }),
//       React.createElement("input", {
//         type: "password",
//         placeholder: "Password",
//         value: password,
//         onChange: (e) => setPassword(e.target.value),
//         style: { display: "block", margin: "10px auto", padding: "5px" },
//       }),
//       error
//         ? React.createElement("p", { style: { color: "red" } }, error)
//         : null,
//       React.createElement(
//         "button",
//         {
//           style: { padding: "8px 15px", cursor: "pointer", marginTop: "10px" },
//           onClick: handleLogin,
//         },
//         "Login"
//       )
//     );
//   };

//   const reactRoot = document.createElement("div");
//   document.body.appendChild(reactRoot);

//   const root = ReactDOM.createRoot(reactRoot);
//   root.render(React.createElement(App));
// }
