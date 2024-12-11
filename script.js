// Select the button element using its ID
const changeColorButton = document.getElementById('change-color-button');

// Define an array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFD433'];

// Add an event listener to the button
changeColorButton.addEventListener('click', () => {
    //Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    //Change background color of the body
    document.body.style.backgroundColor = randomColor;
});