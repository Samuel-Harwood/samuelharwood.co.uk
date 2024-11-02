

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

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetBlock = document.querySelector(this.getAttribute('href'));
        targetBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.box-container.two');
  const image = document.getElementById('gravityImg');

  // Initial settings
  let velocityX = 0;
  let positionX = container.getBoundingClientRect().width - image.getBoundingClientRect().width; // Start from the right
  let mouseForceX = 0;
  let mouseForceY = 0;
  const gravity = -0.6;         // Gravity strength pulling to the left
  const bounceFactor = 0.7;     // Controls bounce intensity

  function applyGravity() {
    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    // Apply reversed horizontal gravity to velocity (moving leftward)
    velocityX += gravity;
    positionX += velocityX + mouseForceX;

    // Constrain positionX to stay within container's width
    positionX = Math.min(
      Math.max(positionX, 0),
      containerRect.width - imageRect.width
    );

    // Set image position relative to the container
    image.style.left = `${positionX}px`;

    // Left-boundary bounce within container
    if (positionX <= 0) {
      positionX = 0;
      velocityX *= -bounceFactor; // Reverse velocity to simulate bounce
    }

    // Gradually reduce mouse force for a smooth effect
    mouseForceX *= 0.95;
    mouseForceY *= 0.95;

    requestAnimationFrame(applyGravity);
  }

  // Detect cursor movement and apply repelling force within container
  container.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) { // Adjust sensitivity
      const force = (150 - distance) / 150; // Increase force as cursor gets closer
      mouseForceX += -force * (dx / distance) * 10; // Horizontal repelling force
      mouseForceY += -force * (dy / distance) * 10; // Vertical repelling force
    }
  });

  applyGravity();
});