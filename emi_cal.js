function emi(){
    let a = Number(document.getElementById("loan").value)
    let b = Number(document.getElementById("rate").value)
    let c = Number(document.getElementById("month").value)
    let int = (a*b*c)/100;
    let total = a + int;
    let e = total/c;
    document.getElementById("r").innerText="monthly EMI="+e;
}