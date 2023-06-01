export const script = 'Block 7';

const asideChat = document.getElementById('chat');
const asideCall = document.getElementById('call');
const headerCall = document.querySelector('.header__call');
const headerChatBth = document.querySelector('.header__chat');
const feedback = document.querySelector('.feedback');
const feedbackClosed = document.querySelector('.feedback__bth');
const call = document.querySelector('.call');
const callClosed = document.querySelector('.call__bth');

const burger = document.querySelector('.header__burger');
const aside = document.querySelector('.aside');
const burgerClosed = document.querySelector('.burger__bth');



const openFeedbac = (event) => {
	feedback.classList.add('open')
    let div = document.createElement('div');
    div.className = 'shadow';
    document.body.prepend(div);
};

const closedFeedback = (event) => {
	feedback.classList.remove('open');
    let div = document.querySelector('.shadow');
    div.remove();
};

window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') { 
		feedback.classList.remove('open')
    let div = document.querySelector('.shadow');
    div.remove();
	}
});


const openCall = (event) => {
	call.classList.add('open')
  let div = document.createElement('div');
  div.className = 'shadow';
  document.body.prepend(div);
};

const closedCall = (event) => {
	call.classList.remove('open');
  let div = document.querySelector('.shadow');
  div.remove();
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { 
		call.classList.remove('open')
    let div = document.querySelector('.shadow');
    div.remove();
	}
});
  

const openBurger = (event) => {
  aside.classList.add('open')
};
  
const closedBurder = (event) => {
  aside.classList.remove('open')
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { 
    aside.classList.remove('open')
  }
});
  
burger.addEventListener("click", openBurger);
burgerClosed.addEventListener("click", closedBurder);
  
asideCall.addEventListener("click", openCall); // Открывает заказать звонок aside
headerCall.addEventListener("click", openCall); //  Открывает заказать звонок header
callClosed.addEventListener("click", closedCall); // Закрывает заказать звонок 

asideChat.addEventListener("click", openFeedbac); // Открывает обратную связь в aside
headerChatBth.addEventListener("click", openFeedbac); // Открывает обратную связь в header
feedbackClosed.addEventListener("click", closedFeedback); // Закрывает обратную связь

