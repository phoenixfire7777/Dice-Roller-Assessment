let rollDiceButton = document.querySelector('#roll-button')
let numOfDice = document.querySelector('#num-of-dice')
let allRollsElement = document.querySelector('#total')
let showAllRollsButton = document.querySelector('#show-all-rolls')
let allDiceRollsElements = document.querySelector('#all-rolls')
let resetButton = document.querySelector('#reset-button')
let numOfSidesOnDice = document.querySelector('#num-of-sides-on-dice')

const dieRolls = []
let diceRollTotal = 0
rollDiceButton.addEventListener('click', function () {

    let diceQuantity = numOfDice.value
    let diceSides = numOfSidesOnDice.value
    while (diceQuantity > 0) {
        console.log('num of dice' + diceQuantity)
        let diceRoll = Math.floor((Math.random() * diceSides) + 1)

        diceRollTotal += diceRoll;
        diceQuantity -= 1
        console.log(diceRoll)
        dieRolls.push(diceRoll)
    }
    console.log(dieRolls)
    console.log(diceRollTotal)
    const newDiceString = 'The sum of rolls is ' + diceRollTotal
    allRollsElement.innerHTML = newDiceString
    // diceQuantity = 0
    // diceSides = 0
})

showAllRollsButton.addEventListener('click', function () {
    let limit = dieRolls.length
    let diceQuantityNum = 0

    while (diceQuantityNum < limit) {
        let numberRolled = dieRolls[diceQuantityNum]
        const allDiceRollString = '<li class="dice">' + '<p class="diceNumberRolled">' + numberRolled + '</p>' + '</li>'
        allDiceRollsElements.innerHTML += allDiceRollString
        console.log(dieRolls[diceQuantityNum])
        diceQuantityNum += 1

    }

})

resetButton.addEventListener('click', function () {
    let diceQuantityNum = dieRolls.length - 1
    while (diceQuantityNum >= 0) {
        dieRolls.pop()
        diceQuantityNum -= 1
    }
    while (allDiceRollsElements.hasChildNodes()) {
        allDiceRollsElements.removeChild(allDiceRollsElements.firstChild)
    } //w3schools.com  this code removes the list of results for each dice roll

    diceRollTotal = 0
    newDiceString = 'The sum of rolls is ' + diceRollTotal
    allRollsElement.innerHTML = newDiceString
    console.log(dieRolls)
    numOfDice.value = ""
    numOfSidesOnDice.value = ''

})
