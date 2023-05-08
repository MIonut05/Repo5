
//Afisarea anumitor sectiuni in functie de click prin adaugare de clase CSS
var buton = document.getElementsByClassName("buton");
var section = document.getElementsByClassName("section");

for (let i = 0; i < buton.length; i++) {
    buton[i].addEventListener('click', function () {

        for (let p = 0; p < section.length; p++) {
            section[p].style.display = 'none';
        }
 

        var sectionId = "section" + (i + 1);
        var sec = document.getElementById(sectionId);
        sec.style.display = "block"
    })
}