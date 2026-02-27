console.log("Hello, World!")

function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = `profile name: ${name}`;
}

const button = document.querySelector(".section-two button");

button.addEventListener("click", updateName);


