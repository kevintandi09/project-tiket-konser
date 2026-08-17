import { konserDatas } from "/data/datas.js"

export function initHero(element) {
  const hero = document.getElementById("hero");
  const eventCategory = document.getElementById("event-category");
  const eventTitle = document.getElementById("event-title");
  const eventDate = document.getElementById("date");
  const eventLocation = document.getElementById("location");
  const konserData = konserDatas[1]; 

  hero.style.backgroundImage = `url('${konserData.image}')`;
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
  eventCategory.textContent = konserData.category;
  eventTitle.textContent = konserData.title;
  eventDate.lastChild.textContent = `${konserData.date}`;
  eventLocation.lastChild.textContent = `${konserData.location}`;
  hero.style.color = konserData.textColor;
};