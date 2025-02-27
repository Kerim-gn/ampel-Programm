var numbers = [
    7,
    48,
    23,
    9,
    45,
    67,
    99,
    1,
    20,
    77,
    94

]
var numbersTwo = [
    15,
    70,
    80,
    90,
    2,
    1,
    3
]


function main() {
    var Promptnumber = prompt();
    var wishnumber = parseInt(Promptnumber)
    var result = filter ( numbers,wishnumber  )
    console.log(result)

    result = filter (numbersTwo, 30)
    console.log(result)
}

function filter(arrayToFilter, highestNumberToAllowed) {
    var filteredNumbers = [];
    for (let i = 0; i < arrayToFilter.length ; i++){
        if (arrayToFilter[i] <= highestNumberToAllowed)
            filteredNumbers.push(arrayToFilter[i])
        else{
            console.log ("deine eingabe ist ungültig")
        }
    }
    return filteredNumbers
}