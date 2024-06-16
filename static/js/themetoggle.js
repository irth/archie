function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);
    if (mode === "dark") {
        document.getElementById("darkModeStyle").disabled=false;
        document.getElementById("dark-mode-toggle").innerHTML = `<a href="#">light</a>`
        feather.replace()
    } else if (mode === "light") {
        document.getElementById("darkModeStyle").disabled=true;
        document.getElementById("dark-mode-toggle").innerHTML = `<a href="#">dark</a>`
        feather.replace()
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

var savedTheme = localStorage.getItem("theme-storage") || "dark";
setTheme(savedTheme);
