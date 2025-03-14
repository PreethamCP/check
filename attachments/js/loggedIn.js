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
  function addImage(filename) {
    const container = document.getElementById("works");
    if (!container) return;

    const img = document.createElement("img");
    img.src = `./attachments/images/projects/${filename}`; // Correct image path
    img.style.width = "200px";
    img.style.display = "none"; // Initially hidden

    container.appendChild(img);
    restartCarousel();
  }

  function removeImage() {
    const container = document.getElementById("works");
    if (!container || container.children.length === 0) return;

    container.removeChild(container.lastChild);
    restartCarousel();
  }

  function restartCarousel() {
    clearInterval(interval);
    startCarousel();
  }

  function addButtons() {
    const container = document.getElementById("works");
    if (!container) return;

    // Add Button
    const addBtn = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.textContent = "Add Image";
    addBtn.addEventListener("click", () => {
      const filename = prompt("Enter image filename (e.g., image.jpg):");
      if (filename) addImage(filename);
    });

    // Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn";
    removeBtn.textContent = "Remove Image";
    removeBtn.addEventListener("click", removeImage);

    container.appendChild(addBtn);
    container.appendChild(removeBtn);
  }

  // Run functions after DOM loads
  document.addEventListener("DOMContentLoaded", addButtons);
}
