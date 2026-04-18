function grat(){
let a = Number(document.getElementById("a").value);
let b = Number(document.getElementById("b").value);
let c = Number(document.getElementById("c").value);
if(a>=b){
    if (a==b && b==c) {
        document.getElementById("r1").innerText="all are equal"
    }
    else if (a>=c){
        document.getElementById("r1").innerText=a+" is greatest"
    }
    else {
        document.getElementById("r1").innerText=c+" is greatest"
    }
}
else{
     if (b>=c){
        document.getElementById("r1").innerText=b+" is greatest"
    }
    else {
        document.getElementById("r1").innerText=c+" is greatest"
    }
}
}