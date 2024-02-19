//

document.querySelector("header > h1").innerHTML = "Centipedes: Fact and Fiction";

document.body.style.backgroundColor = "white";

// get the image element
document.getElementById("cent2").addEventListener("mouseover", outputImage);
function outputImage(){
  document.getElementById("cent2").src = "./img/scolopendra.jpg";
}

document.getElementById("cent2").addEventListener("mouseout", inputImage);
function inputImage(){
  document.getElementById("cent2").src = "./img/centipede-5454871_1280.jpg";
}



