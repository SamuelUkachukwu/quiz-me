//handle light and dark mode
const toggle = document.getElementById("toggle-mode");

const root = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
    root.classList.add("dark");
    toggle.innerHTML = `<i class="fas fa-sun"></i>`;
} else {
    toggle.innerHTML = `<i class="fas fa-moon"></i>`;
}

toggle.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    if (isDark) {
        localStorage.setItem("theme", "dark");
        toggle.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        localStorage.removeItem("theme");
        toggle.innerHTML = `<i class="fas fa-moon"></i>`;
    }
});