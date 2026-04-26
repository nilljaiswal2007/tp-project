function pf(){

let c = Number(document.getElementById("buy").value);
let s = Number(document.getElementById("sell").value);
let m
if (c>s) {
    m = c-s;
    document.getElementById("r").innerText="profit=+₹"+m;
}
else{
    m = s-c;
    document.getElementById("r").innerText="loss=-₹"+m;
}
}