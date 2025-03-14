let imageArray = [
  "./attachments/images/projects/image1.jpg",
  "./attachments/images/projects/image2.jpg",
  "./attachments/images/projects/image3.jpg",
];

function addImage() {
  let newImagePath = prompt("Enter the image URL or path:");
  if (newImagePath) {
    imageArray.push(newImagePath);
    console.log("Image added:", newImagePath);
  }
}

function removeImage() {
  if (imageArray.length > 0) {
    let removedImage = imageArray.pop();
    console.log("Removed image:", removedImage);
  } else {
    alert("No images left to remove!");
  }
}

// Dynamically create buttons
function createButtons() {
  let buttonContainer = document.getElementById("buttonContainer");
  if (!buttonContainer) {
    buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
    document.body.appendChild(buttonContainer);
  }

  buttonContainer.innerHTML = ""; // Clear old buttons

  let addBtn = document.createElement("button");
  addBtn.id = "addBtn";
  addBtn.textContent = "Add Image";
  addBtn.onclick = addImage;

  let removeBtn = document.createElement("button");
  removeBtn.id = "removeBtn";
  removeBtn.textContent = "Remove Image";
  removeBtn.onclick = removeImage;

  buttonContainer.appendChild(addBtn);
  buttonContainer.appendChild(removeBtn);
}

// Call this function when the login page is loaded
createButtons();
