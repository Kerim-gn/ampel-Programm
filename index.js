

function main() {
    var input = document.getElementById("x");
   /* if( passwort == 1111){
        alert("du hast freien zugang")
    }else{
        alert("dein zugang wurde gespert")
    }*/
    //const Farbe = prompt("Gebe die gewünschte AmpelFarbe an,GRÜN,ORANGE,ROT");
    var color = input.value;
    var AmpelFarbe = color.toLowerCase();
    
    if(AmpelFarbe == "grün"){
        alert("deine ampel farbe ist auf grün")
    } else if (AmpelFarbe == "rot"){
        alert("deine ampel farbe ist auf rot")
    }else if ( AmpelFarbe == "orange"){
        alert("deine ampel farbe ist auf orange")
    }else{
        alert("keine passende farbe")
    }

}