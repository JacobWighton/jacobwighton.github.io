/*
This is a comment.
*/

// This is a comment


const flagImage = document.querySelector("img");

let imageFlipped = false;

flagImage.onclick = () => {
    if (imageFlipped) {
        flagImage.setAttribute("src", "images/flag-icon.png");
        imageFlipped = false;
    } else {
        flagImage.setAttribute("src", "images/flag-icon-flip.png");
        imageFlipped = true;
    }
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        alert("Please enter a name.")
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}.`;    
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}.`;
}

myButton.onclick = () => {
    setUserName();
}