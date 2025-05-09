import format from 'date-fns/format';

var span = document.querySelector('#time-now');
var spansize = document.querySelector('#mainHeight');

function sizes(){
    spansize.textContent = document.body.main.clientWidth();
};
    
export default function update() {
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
};
