import { initNavbar } from "./navbar.js";
import { initHero } from "./hero.js";
import { initTrending } from "./trending.js";
import { initFooter } from "./footer.js";

const components = [
    ["navbar", "/components/navbar.html", initNavbar],
    ["hero", "/components/hero.html", initHero],
    ["trending", "/components/trending.html", initTrending],
    ["footer", "/components/footer.html", initFooter]
];

async function loadComponents(id, file, initFunction) {
    const element = document.getElementById(id);
    const response = await fetch(file);

    if(!response.ok) {
        console.error(`Failed to load ${file}: ${response.statusText}`);
        return;
    }

    element.innerHTML = await response.text();

    if(initFunction) {
        initFunction(element);
    };
} 

components.forEach(([id, file, initFunction]) => {
    loadComponents(id, file, initFunction);
});