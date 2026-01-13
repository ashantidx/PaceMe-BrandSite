// app.js

// Add click logging for all buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Button clicked:", btn.textContent);
  });
});

// Get the demo button element
const demoButton = document.getElementById('demo-btn');

// Check if button exists before adding event listener (avoids errors)
if (demoButton) {

  demoButton.addEventListener('click', () => {

    // Find the first section with class "video-section"
    const videoSection = document.querySelector('section.video-section');

    // If the target section exists, scroll to it smoothly
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("⚠️ video-section not found in the DOM");
    }
  });

} else {
  console.warn("⚠️ demo-btn not found in the DOM");
}
