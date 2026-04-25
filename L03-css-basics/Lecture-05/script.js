let isDark = false;

const themeBtn = document.getElementById("themeBtn");
const lastUpdated = document.getElementById("lastUpdated");

function applyTheme() {
  if (isDark) {
    document.body.classList.add("dark");
    localStorage.setItem("portfolio_theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("portfolio_theme", "light");
  }
}

const savedTheme = localStorage.getItem("portfolio_theme");

if (savedTheme === "dark") {
  isDark = true;
  applyTheme();
}

themeBtn.addEventListener("click", function () {
  isDark = !isDark;
  applyTheme();
});

const today = new Date().toISOString().split("T")[0];
lastUpdated.textContent = `Last updated: ${today}`;