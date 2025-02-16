fruits = ["apple", "banana", "orange"]
console.log(fruits[fruits.length -2]);

var names = ["kerim", "abdul", "ahemt"]
console.log(names)

names.push("max")
console.log(names);

var numbers = [1,3,4,5]
numbers.splice(1,0,2)
console.log(numbers);

var numberstwo = [6,7,8,9] 

var newnumbers = numbers.concat(numberstwo)
console.log(newnumbers);

numbers.pop(3)
console.log(numbers);

var serach = numberstwo.find(item => item == 9)
console.log("////////");
console.log(serach);
var index = numberstwo.indexOf(8)

console.log(index);

var arrayOne = ['John','Maria','Lucas']
var arrayTwo = ['Steven', 'Adrian', 'Claudia']
let arrrayThree = arrayOne.concat(arrayTwo)
arrrayThree.splice(6,7,"Peter")
//arrrayThree.push("Peter")
console.log(arrrayThree)


var human = {
    name: "Kerim",
    height:1.83,
    country: "DE",
    adress:[{street:"Dreikönigen straße", Plz:50678, ort:"Köln"},
        {street:"universtätä straße", Plz:50978, ort:"hamburg"},
        {street:"venlor straße", Plz:50798, ort:"düsseldorf"},
        {street:"alterburger straße", Plz:50578, ort:"münchen"}
    ]
}
console.log(human.adress[1]);


var alter =  8

if(alter >= 18){
    console.log("eintriit gewährt")
}
else {
    console.log("eintrit verweigert")
}


const Farbe = prompt("Gebe die gewünschte AmpelFarbe an,GRÜN,ORANGE,ROT")

if(Farbe == "Grün"){
    alert("deine ampel farbe ist auf grün")
} else if (Farbe == "rot"){
    alert("deine ampel farbe ist auf rot")
}else if ( farbe == "orange"){
    alert("deine ampel farbe ist auf rot")
}else{
    alert("keine passende farbe")
}