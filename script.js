// =======================
// Part 2: JavaScript Functions
// =======================

// A function that doubles a number (with parameter and return value)
function doubleNumber(x) {
  return x * 2;
}

// Global Scope
const resultDisplay = document.getElementById("result");

// Function that gets value from input and displays doubled result
function handleDouble() {
  const input = document.getElementById("numInput").value;
  const num = parseFloat(input);

  // Local scope
  if (!isNaN(num)) {
    const doubled = doubleNumber(num); // Reuse the function
    resultDisplay.textContent = `Result: ${doubled}`;
  } else {
    resultDisplay.textContent = "Please enter a valid number.";
  }
}

// =======================
// Part 3: Combine JS + CSS Animations
// =======================

function triggerSlide() {
  const box = document.getElementById("slideBox");

  // Toggle the 'hidden' class to trigger CSS transition
  box.classList.toggle("hidden");
}
