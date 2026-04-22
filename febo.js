function feb(){
    let a=0;
    let b=1;
    let n = Number(document.getElementById("n").value)
    let result = a +""+b+"";
    for (let i=3;i<=n;i++){
        let c = a+b;
        result += c+"";
        a=b;
        b=c;
    }
    document.getElementById("r").innerText=result;
}