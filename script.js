const cards = document.querySelectorAll('.memory_card');
let playTimer = document.getElementById('play_btn');




let hasFlippedCard = false;
let lockBoard =  false;
let firstCard, secondCard;
let ramdomPos;


(function shuffle() {
    cards.forEach(cards => {
        ramdomPos = Math.floor(Math.random()* 12);
        cards.style.order = ramdomPos;
    });

})();




function flipCard(){
    if (lockBoard) return;

    //this.classList.add('flip');
    //if card double Click
    if (this === firstCard)
        return;

    //console.log(this.childNodes[0]);
this.getElementsByClassName('front-face')[0].classList.toggle('flip');


//console.log(this);

if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //console.log(cardsFront);


    //data attribute
        //console.log(firstCard.dataset.framework);
        //console.log(secondCard.dataset.framework);

        checkForMatch();

        function restart(){
    if (checkForMatch() === 10){
        document.getElementById("overlay").style.display = 'block';
        alert('vous avez gané !')
    }
}

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
    }, 500);
   // resetBoard();

}

function unflipCards(){

    lockBoard = true;
    //if is not a match
    //assigning a time delay to see the image of the back-card
    setTimeout(()=>{
        firstCard.getElementsByClassName('front-face')[0].classList.toggle('flip');
        secondCard.getElementsByClassName('front-face')[0].classList.toggle('flip');
        //firstCard.classList.remove('flip');
        //secondCard.classList.remove('flip');
        //lockBoard = false;---// a retirer avec la fonction 'resetBoard()'
        lockBoard = false;
    }, 800);

}
function congratulation(){
    if (checkForMatch.length === 12){
        document.getElementById("overlay").style.display = 'none';
        console.log(checkForMatch.length)
    }
}

cards.forEach(cards => cards.addEventListener('click', flipCard));

//TODO: overlay button:--------------------------

function off() {
    document.getElementById("overlay").style.display = 'none';
}

//TODO: game timer---------------------------------

var second = 0, minute = 0;
var timer = document.getElementById('timer');
var interval;


function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute +  ":mins "+ " " + second +  ":sec ";

        second++;
        if (second === 60 ){
            minute++;
            second = 0;
        }

    },1000);

}





