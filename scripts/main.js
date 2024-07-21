//var myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";
//document.querySelector("html").onclick = function () {
    //alert("Ohhh yes!")
//}

var myImage = document.querySelector("img");

myImage.onclick = function() {
    mySrc = myImage.getAttribute("src");
    if (mySrc == "./images/Firefox_logo,_2019.svg.png") {
        myImage.setAttribute("src", "./images/firefox2.png")
    }
    else {
        myImage.setAttribute("src", "./images/Firefox_logo,_2019.svg.png")
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };