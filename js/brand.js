  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const parallaxItems = document.querySelectorAll('.parallax');

  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    parallaxItems.forEach(el => {
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });