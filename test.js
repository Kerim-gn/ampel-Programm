function warenkorb(produkt, preis) {
    warenkorb = [];
    eingabe = parseInt(prompt("deine eingabe"));
    if(eingabe <= 100){
        warenkorb.push(eingabe)
    }
    console.log(warenkorb);

}