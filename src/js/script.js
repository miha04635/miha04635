
export const scriptЕ = "Block 7";
document.addEventListener("DOMContentLoaded", function(event) {
	
	const container = document.querySelector(".brands");
	const showMoreButton = document.querySelector(".brands__show-more--bth");
	const icon = document.querySelector(".icon");
	const iconDevice = document.querySelector(".Device__icon");
	const containerDevice = document.querySelector(".Device");
	const showMoreButtonDevice = document.querySelector(".Device__show-more--bth");
	
	const aboutText = document.querySelector(".about__text");
	const bth = document.querySelector(".about__more");
	const aboutShowMore = document.querySelector(".about__more-text");
	const iconMain = document.querySelector(".icon__main");
	const comma = document.querySelector(".comma");




const handleClick = () => {
  if (container.classList.contains("expanded")) {
	showMoreButton.textContent = "Показать всё";
  } else {
	showMoreButton.textContent = "Скрыть";
  }
};

showMoreButton.addEventListener("click", handleClick);

showMoreButton.onclick = function() {
	icon.classList.toggle("icon__content");
	container.classList.toggle("expanded");
}

const showMore = () => {
	if (containerDevice.classList.contains("expanded__Device")) {
		showMoreButtonDevice.textContent = "Показать всё";
	} else {
		showMoreButtonDevice.textContent = "Скрыть";
	}
  };
  
showMoreButtonDevice.addEventListener("click", showMore);


showMoreButtonDevice.onclick = function() {
	iconDevice.classList.toggle("icon__content");
 	containerDevice.classList.toggle("expanded__Device");
}



const textContent = () => {
	if (aboutText.classList.contains("open__about")) {
		aboutShowMore.textContent = "Читать далее";
	} else {
		aboutShowMore.textContent = "Скрыть";
	}
  };

const openMore = () => {
	aboutText.classList.toggle("open__about");
  	iconMain.classList.toggle("rotate");
};

const commaVis = () => {
  if (window.innerWidth > 768) {
    comma.classList.toggle("comma__hidden");
  }	
}
bth.addEventListener("click", textContent);
bth.addEventListener("click", commaVis);
bth.addEventListener("click", openMore);

});





