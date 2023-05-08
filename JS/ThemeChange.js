
//Schimbarea temei generale, schimbare logo soare/luna si schimbare logo-img in functie de existenta sau inexistenta bg-dark
var themeButtons = document.getElementsByClassName("SchimbaTema");
var imagini = document.getElementsByClassName("schimba-imaginea");
var body = document.body;
var bodyClass = body.classList;
var iClass = document.querySelector(".fa-moon");

//Salvam local preferinta de tema 
var storedTheme = localStorage.getItem("selectedTheme");
if (storedTheme) {
    // Aplicăm tema stocată
    bodyClass.add(storedTheme);
    if (storedTheme === "bg-dark") {
        Array.from(imagini).forEach(function (imagine) {
            iClass.classList.remove("fa-moon");
            iClass.classList.add("fa-sun");
            imagine.src = "./images/logoNight.png";
            imagine.alt = "logo-night";
        })
    }
}

for (var i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', function (press) {

        Array.from(imagini).forEach(function (imagine) {

            if (bodyClass.contains("bg-dark")) {

                iClass.classList.remove("fa-sun");
                iClass.classList.add("fa-moon");
                imagine.src = "./images/1.png";
                imagine.alt = "logo-day";
                body.classList.remove("bg-dark");
                localStorage.setItem("selectedTheme", "");

            } else {
                iClass.classList.remove("fa-moon");
                iClass.classList.add("fa-sun");
                imagine.src = "./images/logoNight.png";
                imagine.alt = "logo-night";
                body.classList.add("bg-dark");
                localStorage.setItem("selectedTheme", "bg-dark");
            }
        })
    });
}



