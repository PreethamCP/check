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
    }, 5000);
  }
});

function loginCredentials() {
  addStylesheet("./attacthments/css/loginStylesheet.css");

  let loginDiv = document.createElement("div");
  let loginText = document.createElement("h1");
  loginText.textContent = "ADMIN LOGIN";
  loginDiv.appendChild(loginText);
  document.body.appendChild(loginDiv);
}

function addStyleshhet(url) {
  let link = document.createElement("link");
  link.rel = "loginStylesheet";
  lint.href = url;
  link.id = "loginStylesheet";
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
