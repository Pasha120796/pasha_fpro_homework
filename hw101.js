var imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
var randomIndex = Math.floor(Math.random() * imageNames.length);
var randomImageName = imageNames[randomIndex];
var imageUrl = "images/" + randomImageName;
var imgElement = document.createElement("img");
imgElement.src = imageUrl;

document.body.appendChild(imgElement);