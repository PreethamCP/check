let imageArray = [
  "./attachments/images/projects/image1.jpg",
  "./attachments/images/projects/image2.jpg",
  "./attachments/images/projects/image3.jpg",
];

let works = document.getElementById("works");

if (!works) {
  console.error("Element with ID 'works' not found.");
} else {
  let index = 0;
  let img = document.createElement("img");
  img.src = imageArray[index];
  img.alt = "Project Image";
  works.appendChild(img);

  setInterval(() => {
    index = (index + 1) % imageArray.length; // Rotate index
    img.src = imageArray[index];
  }, 2000);
}
