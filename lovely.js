const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');

function ToggleAccordian() {
    const thisItem = this.parentNode;

    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }
    
        item.classList.remove('open');
    });
    
    console.log(this.parentNode);
}

questions.forEach(question => question.addEventlistener('click', ToggleAccordian));