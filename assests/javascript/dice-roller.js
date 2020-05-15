const dieRolls = []

let rollDiceButton = document.querySelector(#roll - button)
let numOfDice = document.querySelector(#num - of - dice)
let diceTotal = document.querySelector(#total)
let diceRollTotal = 0
rollDiceButton.addEventListener('click', function () {
    let x = numOfDice.value
    let count = 1
    while (count <= x) {
        let diceRoll = Math.floor((Math.random() * 4) + 1)
        dieRolls.push(diceRoll)
        diceRollTotal += diceRoll
        count += 1
        console.log(count)
    }
    document.diceTotal.innerHtml = "The sum of the rolls is " + diceRollTotal
})