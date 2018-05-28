const accordions = document.getElementsByClassName('accordion-button');// get the buttons

for (const accordion of accordions) {
  accordion.onclick = function() {

    this.classList.toggle('is-open');


    let content = this.nextElementSibling;
      if (content.style.maxHeight) {//is open 
          content.style.maxHeight = null;//close it
      } else {// accordion is closed
          content.style.maxHeight = content.scrollHeight + "px";//open it
    }
  }   
}