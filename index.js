

/*function hinzugüfen(item) {
   einkaufsliste = [];
    if(!einkaufsliste.includes(item)){
      einkaufsliste.push(item);
     
      let li = document.createElement("li");
            li.textContent = item;
            document.getElementById("warenkorb").appendChild(li);
        }
       
}'*/
let warenkorb = []; // Einkaufsliste als Array

    function hinzufuegen(item, preis) {
        // Element zum Warenkorb-Array hinzufügen
        warenkorb.push({ item, preis });

        // Neues Listenelement für die Anzeige erstellen
        let li = document.createElement("li");
        li.textContent = `${item} - ${preis.toFixed(2)}€ `;

        // Entfernen-Button erstellen
        let button = document.createElement("button");
        button.textContent = "Entfernen";
        button.onclick = function() {
            entfernen(item, preis, li);
        };

        li.appendChild(button);
        document.getElementById("warenkorb").appendChild(li);

        updateWarenkorbAnzeige();
    }

    function entfernen(item, preis, listItem) {
        // Nur das erste Vorkommen des Elements entfernen
        let index = warenkorb.findIndex(obj => obj.item === item && obj.preis === preis);
        if (index !== -1) {
            warenkorb.splice(index, 1); // Entfernt genau 1 Element an der gefundenen Position
        }

        listItem.remove(); // Entfernt das Element aus der HTML-Liste
        updateWarenkorbAnzeige();
    }

    function warenkorbLeeren() {
        warenkorb = []; // Leert das Array
        document.getElementById("warenkorb").innerHTML = ""; // Löscht alle Listenelemente
        updateWarenkorbAnzeige();
    }

    function updateWarenkorbAnzeige() {
        // Anzahl der Artikel im Warenkorb aktualisieren
        document.getElementById("warenkorbAnzahl").textContent = warenkorb.length;

        // Gesamtpreis berechnen und anzeigen
        let gesamt = warenkorb.reduce((summe, obj) => summe + obj.preis, 0);
        document.getElementById("gesamtPreis").textContent = gesamt.toFixed(2);
    }