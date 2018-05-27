// Get Elements
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners 
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through Empties and call events
for(const empty of empties) {
  function listens(arg1,arg2){
    empty.addEventListener(arg1, arg2);
  }
  listens( 'dragover' , dragOver);
  listens('dragenter' , dragEnter);
  listens('dragleave' , dragLeave);
  listens(     'drop' , dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd() {
  this.className = 'fill';
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}