

document.addEventListener("DOMContentLoaded", () => {
    const terminalInput = document.getElementById("terminal-input");
    const output = document.getElementById("output");
  
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
        default:

          newOutput.textContent = `Command not found: ${input}`;
          output.appendChild(newOutput);
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
  

 