
// let cards = [];
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let playerEl = document.getElementById("player-el");

// let player = {
//     name: 'Nacho',
//     chips: 165
// }


// playerEl.textContent = `${player.name}: $${player.chips}`;



// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1;
//     if (randomNumber > 10) {
//         return 10;
//     } else if (randomNumber === 1) {
//         return 11;
//     }
//     else {
//         return randomNumber;
//     }

// }


// function startGame() {
//     isAlive = true;
//     // Generate two random numbes
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();

//     // Re-assign the cards and sum variables so that the game can start
//     cards = [firstCard, secondCard];
//     sum = firstCard + secondCard

//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }

//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }


// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard();
//         sum += card
//         // Push the card to the cards array
//         cards.push(card)
//         console.log(cards)
//         renderGame()
//     }
// }



let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    length: 23,
    creator: 'Ignacio',
    level: 2,
    isFree: true,
    tags: ["html", "css", 3]
}

console.log(course.tags);

