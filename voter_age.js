function voter(){

let a = Number(document.getElementById("age").value);
if (a>=18) {
    document.getElementById("r1").innerText="Eligible for Voting";
    
}
else{
    document.getElementById("r1").innerText="Not Eligible for Voting"
}
}