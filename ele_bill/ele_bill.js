function bill(){
    let u = Number(document.getElementById("unit").value);
    let bill = u * 3.5;
    document.getElementById("r").innerText="Electricity Bill"+bill;
}