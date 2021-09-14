//Sets the calculate button as a variable.
const calculate = document.getElementById("calculate");

//Calculates the total shipment weight and sends an alert to the user.
calculate.onclick = function() {
    //HTML elements
    const bolts = document.getElementById("bolts").value;
    const fatQuarters = document.getElementById("fat-quarters").value;
    const pallets = document.getElementById("pallets").value;
    //Values for calculation
    const boltWeight = parseInt(bolts) * 2;
    const fqWeight = parseInt(fatQuarters) * 0.185;
    const palletWeight = parseInt(pallets) * 30;
    const totalWeight = Math.round(boltWeight + fqWeight + palletWeight);
    alert(`${totalWeight}kgs`); //Throws the following error: [object PointerEvent]undefinedundefinedkgs
}   
