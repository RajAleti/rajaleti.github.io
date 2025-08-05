document.querySelectorAll('.fade-in').forEach(el => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.classList.add('visible');
    }
  }, { threshold: 0.1 });
  observer.observe(el);
});

const toggleBtn = document.getElementById("darkToggle");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}