

document.addEventListener("DOMContentLoaded", () => {
    const terminalInput = document.getElementById("terminal-input");
    const output = document.getElementById("output");
    const invalidCommandResponses = [
      "404 Page Not Found",
      "Close, but no keyboard.",
      "Try turning it off and on again.",
      "You've earnt it, Type 7 for a secret!."
    ];
    let responseIndex = 0;

    // Function to handle the user's input
    function handleInput(input) {
      input = input.trim(); // Remove any extra whitespace
      const newOutput = document.createElement("p");
      newOutput.classList.add("gray-text");
      // Handle different inputs
      switch (input) {
        case "1":
          window.location.href = "about.html";
          break;
        case "2":
          window.location.href = "projects.html"; // Adjust this if you want a different behavior

          break;
        case "3":
          window.location.href = "cv.html"; // Adjust this if you want a different behavior

          break;
        case "7":
          newOutput.textContent = "Just kidding :)";
          output.appendChild(newOutput);
          break;
        default:

        newOutput.textContent = invalidCommandResponses[responseIndex];
        output.appendChild(newOutput);

        // Increment the index, loop back to start if end of array is reached
        responseIndex = (responseIndex + 1) % invalidCommandResponses.length;
          break;
      }
    }
  
    // Listen for keypress events
    terminalInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const input = terminalInput.value;
        handleInput(input);
  
        // Display the input in the output section
        const newOutput = document.createElement("p");
        output.appendChild(newOutput);
  
        // Clear the input
        terminalInput.value = "";
      }
    });
  
    // Focus the input field automatically when the page loads
    terminalInput.focus();
  });
  

  var cursor = document.querySelector('.blob');

  document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  });