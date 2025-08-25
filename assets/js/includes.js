async function inject(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;
  try {
    const res = await fetch(url);
    host.innerHTML = await res.text();
    // Mark active link
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    host.querySelectorAll('.nav-link').forEach(a => {
      const href = a.getAttribute('href').toLowerCase();
      if (href === path) a.classList.add('active');
    });
    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  } catch (e) {
    console.error('Include failed for', url, e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inject('#site-header', 'components/header.html');
  inject('#site-footer', 'components/footer.html');
});
