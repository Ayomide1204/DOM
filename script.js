let button = document.getElementsByClassName('btn')[0];

// Add a click event listener to the button
button.addEventListener('click', function() {
    alert('next');
});


document.getElementById('toggleButton').addEventListener('click', function() {
    let colorBox = document.getElementById('colorBox');
    let button = document.getElementById('toggleButton');
    
    // Toggle the color of the box
    let currentColor = colorBox.style.backgroundColor;
    if (currentColor === 'rgb(52, 152, 219)') { // #3498db in RGB
        colorBox.style.backgroundColor = '#e74c3c'; // Switch to red
    } else {
        colorBox.style.backgroundColor = '#3498db'; // Switch back to blue
    }

    // Make the button disappear and reappear after a short delay
    button.style.display = 'none'; // Hide the button
    setTimeout(() => {
        button.style.display = 'block'; // Show the button again
    }, 10000); // 1000ms = 1 second
});
