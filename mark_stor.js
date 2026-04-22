function mark(){
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);
    let total = a+b+c;
    let avg = total/3;
    let high;
    if (a>=b && a>=c) {
        high = a;
    }
    else if(b>=a && b>=c){
        high = b;
    }
    else{
        high = c;
    }
    document.getElementById("r").innerText="total="+total+
                              "|  average = "+avg+
                              "|  highest = "+high;
}