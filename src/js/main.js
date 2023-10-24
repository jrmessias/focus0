document.addEventListener("DOMContentLoaded", () => {
  getSetFocus();
  themeSwitch();
});

function getSetFocus() {
  const input = document.getElementById("focus");

  const currentFocus = localStorage.getItem('focus') ? localStorage.getItem('focus') : null;
  if (currentFocus) {
      input.value = currentFocus
  }

  input.addEventListener("focusout", (event) => {
      localStorage.setItem('focus', input.value);
  });
}

function themeSwitch() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
}

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }
}
