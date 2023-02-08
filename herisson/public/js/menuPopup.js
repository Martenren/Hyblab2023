window.onload = function() {
    const header = document.getElementById("headerMenu");

    const divIconeHeader = document.createElement("div");
    divIconeHeader.id = "iconeHeader";

    const lienLogo = document.createElement("a");
    lienLogo.href = "main.html";
    lienLogo.style.textDecoration = "none";

    const imgLogo = document.createElement("img");
    imgLogo.src = "img/logo_faunare.png";
    imgLogo.alt = "logo";
    imgLogo.id = "logo";
    imgLogo.style.position = "absolute";
    imgLogo.style.top = "0";
    imgLogo.style.left = "0px";
    imgLogo.style.zIndex = "2";
    imgLogo.style.width = "450px";

    lienLogo.appendChild(imgLogo);

    const imgMenuBurger = document.createElement("img");
    imgMenuBurger.src = "img/menu.png";
    imgMenuBurger.alt = "menu";
    imgMenuBurger.id = "popUpNav";
    imgMenuBurger.style.position = "absolute";
    imgMenuBurger.style.top = "50px";
    imgMenuBurger.style.right = "50px";
    imgMenuBurger.style.zIndex = "2";

    divIconeHeader.appendChild(lienLogo);
    divIconeHeader.appendChild(imgMenuBurger);
    header.appendChild(divIconeHeader);


    const divMenu = document.createElement("div");
    divMenu.id = "texteMenu";

    const h1MenuTitre = document.createElement("h1");
    h1MenuTitre.className = "menuTitre";
    h1MenuTitre.innerHTML = "MENU";

    const lienSources = document.createElement("a");
    lienSources.href = "sources.html";
    lienSources.style.textDecoration = "none";

    const h2Sources = document.createElement("h2");
    h2Sources.className = "sousTitresMenu";
    h2Sources.innerHTML = "SOURCES SCIENTIFIQUES";

    lienSources.appendChild(h2Sources);

    const lienContact = document.createElement("a");
    lienContact.href = "contact.html";
    lienContact.style.textDecoration = "none";

    const h2Contact = document.createElement("h2");
    h2Contact.className = "sousTitresMenu";
    h2Contact.innerHTML = "CONTACT";

    lienContact.appendChild(h2Contact);

    const lienCredits = document.createElement("a");
    lienCredits.href = "credits.html";
    lienCredits.style.textDecoration = "none";

    const h2Credits = document.createElement("h2");
    h2Credits.className = "sousTitresMenu";
    h2Credits.innerHTML = "CRÉDITS";

    lienCredits.appendChild(h2Credits);

    const hrSeparateur = document.createElement("hr");
    hrSeparateur.className = "ligneSeparation";

    const pFinMenu = document.createElement("p");
    pFinMenu.className = "texteFinMenu";
    pFinMenu.innerHTML = "Nous œuvrons tous ensemble pour préserver les animaux !";

    divMenu.appendChild(h1MenuTitre);
    divMenu.appendChild(lienSources);
    divMenu.appendChild(lienContact);
    divMenu.appendChild(lienCredits);
    divMenu.appendChild(hrSeparateur);
    divMenu.appendChild(pFinMenu);
    header.appendChild(divMenu);

    imgMenuBurger.addEventListener("click", function () {

        // Page commune et conseils
        var swiperPrev = document.querySelector('.swiper-button-prev');
        var swiperNext = document.querySelector('.swiper-button-next');
        var pagination = document.querySelector('.swiper-pagination');

        if (divMenu.style.display === "block") {

            // Page commune et conseils
            swiperPrev.style.display = 'block';
            swiperNext.style.display = 'block';
            pagination.style.display = 'block';

            divMenu.style.left = "100%";
            setTimeout(function () {
                divMenu.style.display = "none";
            }, 1000);
            anime({
                targets: imgMenuBurger,
                scale: [1, 0.5, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                update: function (anim) {
                    if (anim.progress < 75) {
                        imgMenuBurger.src = "img/croix.png";
                    } else {
                        imgMenuBurger.src = "img/menu.png";
                    }
                }
            });
        } else {

            // Page commune et conseils
            swiperPrev.style.display = 'none';
            swiperNext.style.display = 'none';
            pagination.style.display = 'none';

            divMenu.style.display = "block";
            setTimeout(function () {
                divMenu.style.left = "0";
            }, 1);
            anime({
                targets: imgMenuBurger,
                scale: [1, 0.5, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                update: function(anim) {
                    if(anim.progress < 75) {
                        imgMenuBurger.src = "img/menu.png";
                    } else {
                        imgMenuBurger.src = "img/croix.png";
                    }
                }
            });
        }
    })

};