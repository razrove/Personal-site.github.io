// 1. Age Calculation
const ageEl = document.querySelector('.age');
if (ageEl) {
  const upd = () => ageEl.textContent = new Date(Date.now() - new Date('2001-10-31')).getUTCFullYear() - 1970;
  upd(); setInterval(upd, 864e5);
}

// 2. Reveal System
const btn = document.getElementById('read-more-btn'), ell = document.getElementById('ellipsis');
const hide = document.querySelector('.hidden-inline'), content = document.getElementById('expand-content');

if (btn) btn.onclick = () => {
  btn.style.display = ell.style.display = 'none';
  hide?.classList.add('is-visible');
  content?.classList.add('is-open');
};

// 3. Email & Clipboard System
const emailBtn = document.getElementById('email-trigger'), pill = document.getElementById('email-reveal');
const copyBtn = document.getElementById('copy-email-btn');

emailBtn?.addEventListener('click', e => (e.stopPropagation(), pill?.classList.toggle('is-active')));

copyBtn?.addEventListener('click', e => {
  e.stopPropagation();
  navigator.clipboard.writeText("contact@rajroy.in").then(() => {
    const toast = document.getElementById('copy-confirm');
    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 2000);
  });
});

// Global Close Handler
document.onclick = e => {
  if (pill?.classList.contains('is-active') && !pill.contains(e.target) && e.target !== emailBtn) 
    pill.classList.remove('is-active');
};