// Stratum Commodities — Website Scripts

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  toggle.classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('active');
  });
});

// Tab switching for commodity categories
function switchTab(tabName, btn) {
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  // Deactivate all tabs
  document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
  // Show selected tab content
  document.getElementById('tab-' + tabName).classList.add('active');
  // Activate clicked tab
  btn.classList.add('active');
  // Re-observe new cards for scroll animation
  const newTab = document.getElementById('tab-' + tabName);
  newTab.querySelectorAll('.product-card, .gem-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .why-card, .stat-card, .contact-item, .gem-card, .founder-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Stagger animations for grids
document.querySelectorAll('.products-grid, .why-grid, .about-stats, .founders-grid').forEach(grid => {
  const cards = grid.children;
  Array.from(cards).forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
});
