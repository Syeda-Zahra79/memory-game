document.addEventListener('DOMContentLoaded', () => {

   //card options
   const cardArray = [
      {
         name: 'cheeseburger',
         img : 'images/cheeseburger.png'
      },
      {
         name: 'fries',
         img : 'images/fries.png'
      },
      {
         name: 'hotdog',
         img : 'images/hotdog.png'
      },
      {
         name: 'ice-cream',
         img : 'images/ice-cream.png'
      },
      {
         name: 'milkshake',
         img : 'images/milkshake.png'
      },
      {
         name: 'pizza',
         img : 'images/pizza.png'
      },
      {
         name: 'cheeseburger',
         img : 'images/cheeseburger.png'
      },
      {
         name: 'fries',
         img : 'images/fries.png'
      },
      {
         name: 'hotdog',
         img : 'images/hotdog.png'
      },
      {
         name: 'ice-cream',
         img : 'images/ice-cream.png'
      },
      {
         name: 'milkshake',
         img : 'images/milkshake.png'
      },
      {
         name: 'pizza',
         img : 'images/pizza.png'
      }
   ];

   const grid = document.querySelector(".grid");
   var cardChosen = [];
   var cardChosenId = [];

   //Create the board

   function createBoard() {
      for(i = 0; i < cardArray.length; i++) {
         const card = document.createElement("img");
         card.setAttribute('src', 'images/blank.png');
         card.setAttribute('data-id', i);
         grid.append(card);
         card.addEventListener('click', flipCard)
      }
   };
  

   createBoard();


   // Flip the card

   function flipCard() {
      var cardId = this.getAttribute('data-id');
      cardChosen.push(cardArray[cardId].name);
      //  console.log(cardChosen);
      cardChosenId.push(cardId);
      // console.log(cardChosenId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardChosen === 2) {
         setTimeout(checkForMatch, 500);
      };

   };


   // Check for Match
   
   function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardChosenId[0];
      const optionTwoId = cardChosenId[1];
      if (cardChosenId[0] === cardChosenId[1] ) {
         alert("ou found a match");
         cards[optionOneId].setAttribute('src', 'images/white.png');
         cards[optionTwoId].setAttribute('src', 'images/white.png');
      }
   }










})
