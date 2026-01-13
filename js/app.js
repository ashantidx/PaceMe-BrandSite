// app.js
// This file is prepared for future interaction or animations

// Example: Smooth scroll for buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Button clicked:", btn.textContent);
  });
});

  const demoButton = document.getElementById('demo-btn');

  demoButton.addEventListener('click', () => {
    // Select the first section with the class "video-section"
    const videoSection = document.querySelector('section.video-section');

    // Scroll smoothly to it
    videoSection.scrollIntoView({ behavior: 'smooth' });
  });
