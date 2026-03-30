// тема
function changeTheme() {
    var body = document.querySelector("body");
    var icon = document.querySelector("#icon");
    
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        icon.src = "media/moon.svg";
    } else {
        body.classList.add("dark");
        icon.src = "media/sun.svg";
    }
}

// меню
function toggleMenu() {
    var menu = document.querySelector("#filterBox");
    
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// закрыть
function closeMenu() {
    var menu = document.querySelector("#filterBox");
    menu.style.display = "none";
}