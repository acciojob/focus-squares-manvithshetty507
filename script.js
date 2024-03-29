const squares = document.getElementsByClassName('square');

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');

square1.addEventListener('mouseover', (e) => handleHover(e));
square2.addEventListener('mouseover', (e) => handleHover(e));
square3.addEventListener('mouseover', (e) => handleHover(e));

square1.addEventListener('mouseout', handleLeave);
square2.addEventListener('mouseout', handleLeave);
square3.addEventListener('mouseout', handleLeave);

function handleHover(event) {
  for (const square of squares) {
    if (square === event.target) {
      // Handle the active square
    } else {
      square.classList.add('active');
    }
  }
}

function handleLeave() {
	for (const square of squares) {
	    square.classList.remove('active');
    }
}
