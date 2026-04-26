function tax(){

let s = Number(document.getElementById("salary").value);
let r;
if (s<=250000) {
    r=0;
}
else if(s<=500000){
    r=5;
}
else{
    r=10;
}

let t = (s*r)/100;
document.getElementById("r1").innerText="total tax=₹"+t;
}