loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");
loadComponent("hero", "/components/hero.html");
loadComponent("trending", "/components/trending.html");


function loadComponent(id, file) {

    fetch(file)
        .then(response => response.text())
        .then(data => {

            document.getElementById(id).innerHTML = data;

        });

}