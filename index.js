
function addingEventListener() {
  // Get the button element by its ID
  const input = document.getElementById('button');
  
  // Add a click event listener to the button
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

// Call the function to activate the event listener when the page loads
addingEventListener();