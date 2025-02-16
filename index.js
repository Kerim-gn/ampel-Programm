

function main() {
    var inputspeed = document.getElementById("speed");
    var inputmaxspeed = document.getElementById("maxspeed");
    var blitz = document.getElementById("Blitzer")

    var speed = parseInt(inputspeed.value); 
    var check = blitz.checked;
    var maxspeed = parseInt(inputmaxspeed.valu);
    var endspeed = maxspeed * 1.10; //  = maxspeed +((maxspeed/100)*10); ist die lösung bei mir ist das probelm das 55 zu schnell nicht durchgeht 
    
    if(speed >= endspeed && check == true){
        alert("der blitzer ist durchgegangen")
    }else {
       alert("verfahren wurde eingestellt")
    }

}