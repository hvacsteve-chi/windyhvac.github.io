import format from 'date-fns/format';
import sizes from './sizes.js';

var span = document.querySelector('#time-now');
var spansize = document.querySelector('#mainHeight');

export function sizes(){
    spansize.textContent = document.body.main.clientWidth();
};
    
export default function update() {
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
};
