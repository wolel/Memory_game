const cards = document.querySelectorAll('.memory_card');
const cardsFront = document.querySelectorAll('.front-face');

let hasFlippedCard = false;
let lockBoard =  false;
let firstCard, secondCard;



function flipCard(){
    if (lockBoard) return;

    //if card double Click
    if (this === firstCard){
        return;
    }
    //console.log(this.childNodes[0]);
this.getElementsByClassName('front-face')[0].classList.toggle('flip');

//this.classList.toggle('flip');
console.log(this);

if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;


        return;
    }
        //second click
        hasFlippedCard = false;
        secondCard = this;

        console.log(cardsFront);


    //data attribute
        //console.log(firstCard.dataset.framework);
        //console.log(secondCard.dataset.framework);

        checkForMatch();

}

function checkForMatch() {
    /*  if (firstCard.dataset.framework === secondCard.dataset.framework){
          //it's a match
          disableCards()
      }else{
          //if doesn't match
          unflipCards();
      }
  }*/
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
isMatch ? disableCards() : unflipCards();
// isMatch if is true:funct 'disablecards()', if is false:funct 'unflipcards'
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    lockBoard = true;
    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        lockBoard = false;

    }, 1000);
}
function unflipCards(){

    lockBoard = true;
    //if is not a match
    //assigning a time delay to see the image of the back-card
    setTimeout(()=>{
        firstCard.getElementsByClassName('front-face')[0].classList.toggle('flip');
        secondCard.getElementsByClassName('front-face')[0].classList.toggle('flip');
        lockBoard = false;
    }, 1000);

}
/*function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}*/

cards.forEach(cards => cards.addEventListener('click', flipCard));
cardsFront.forEach( cardsFront => cardsFront.addEventListener('click', flipCard));



flipCard();