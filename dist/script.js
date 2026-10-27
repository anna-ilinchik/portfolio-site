const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpen));
  navigation.classList.toggle('open', isOpen);
  menuButton.querySelector('span').textContent = isOpen ? '−' : '+';
});
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
  menuButton.querySelector('span').textContent = '+';
}
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
let toastTimeout;
document.querySelector('#copy-email').addEventListener('click', async () => {
  const toast = document.querySelector('#toast');
  try {
    await navigator.clipboard.writeText('anna.ilyinchik@gmail.com');
    toast.textContent = 'Email copied to clipboard';
  } catch {
    toast.textContent = 'anna.ilyinchik@gmail.com';
  }
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3500);
});
