function loggedIn() {
  let loginDiv = document.querySelector(".login");
  if (loginDiv) {
    loginDiv.remove(); // OR loginDiv.parentNode.removeChild(loginDiv);
  }
  let stylesheet = document.querySelector(
    'link[href="./attachments/css/loginStylesheet.css"]'
  );
  if (stylesheet) {
    stylesheet.remove(); // OR stylesheet.parentNode.removeChild(stylesheet);
  }
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  project();
}

function project() {
  console.log("project phase now");
}
