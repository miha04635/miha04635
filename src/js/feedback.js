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

const shadow = document.querySelector('.shadow')


// document.addEventListener('click', (e) => {
//   const click = e.composedPath();
//   console.log(click);
// })


const openFeedback = () => {
	feedback.classList.add('open')
  shadow.style.display = 'block';
};

const closedFeedback = () => {
	feedback.classList.remove('open');
  shadow.style.display = 'none';
};




const openCall = () => {
	call.classList.add('open')
  shadow.style.display = 'block';
};

const closedCall = () => {
	call.classList.remove('open');
  shadow.style.display = 'none';
};
  

const openBurger = () => {
  aside.classList.add('open')
};
  
const closedBurder = () => {
  aside.classList.remove('open')
}
  

const clickShadow = () => {
  call.classList.remove('open');
  feedback.classList.remove('open');
  shadow.style.display = 'none';
}


  
shadow.addEventListener('click', clickShadow);


burger.addEventListener("click", openBurger);
burgerClosed.addEventListener("click", closedBurder);



asideCall.addEventListener("click", openCall); // Открывает заказать звонок aside
headerCall.addEventListener("click", openCall); //  Открывает заказать звонок header
callClosed.addEventListener("click", closedCall); // Закрывает заказать звонок 

asideChat.addEventListener("click", openFeedback); // Открывает обратную связь в aside
headerChatBth.addEventListener("click", openFeedback); // Открывает обратную связь в header
feedbackClosed.addEventListener("click", closedFeedback); // Закрывает обратную связь

