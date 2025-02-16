

function main() {
    var input = document.getElementById("age");
    var age = input.value; 

    if(age < 0 || age >= 115){
    alert("TRAGE EIN KORREKTES ALTER EIN")
    } else if(age <= 6 || age >=60){
    alert("du bekommst den sonderpreis");
    } else if(age > 6 && age < 60){
    alert("für dich gilt der normale preise");
    }else{
    alert("falscher eintrag");
    }
}