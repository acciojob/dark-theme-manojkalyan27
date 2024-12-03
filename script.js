//your code here

const btn = document.querySelector('#swap');
const mainDiv = document.querySelector('#app');

btn.addEventListener('click',()=>{
	if(mainDiv.classList.contains('day')){
		mainDiv.classList.remove('day');
		mainDiv.classList.add('night');
		btn.classList.remove('button_day');
		btn.classList.add('button_night');
	}
	else{
		mainDiv.classList.remove('night');
		mainDiv.classList.add('day');
		btn.classList.remove('button_night');
		btn.classList.add('button_day');
	}
})