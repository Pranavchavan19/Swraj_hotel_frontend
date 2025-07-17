// src/theme.js
export function getTheme() {
  let theme = localStorage.getItem("theme");
  return theme ? theme : "light";
}

export function applyTheme(theme, oldTheme) {
  localStorage.setItem("theme", theme);
  if (oldTheme) {
    document.querySelector("html").classList.remove(oldTheme);
  }
  document.querySelector("html").classList.add(theme);
}
