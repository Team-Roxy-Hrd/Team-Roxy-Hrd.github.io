function changeTheme() {
    var selectElement = document.getElementById("themeSelect");
    var themeFile = selectElement.value;
    var themeLink = document.getElementById("themeLink");
    themeLink.href = themeFile;

    localStorage.setItem("selectedTheme", themeFile);
}

window.onload = function() {
    var selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme) {
        var themeLink = document.getElementById("themeLink");
        themeLink.href = selectedTheme;
    }
}
