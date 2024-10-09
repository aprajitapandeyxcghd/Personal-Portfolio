// Dark/Light mode toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});
