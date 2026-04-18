function table(){
    let a = Number(document.getElementById("a").value);
    let i;
    let c;
    document.getElementById("r").innerText="";
    for (i=1;i<=10;i++) {
        c=i*a;
        document.getElementById("r").innerText+=a+"x"+i+"="+c+"\n";
        
    }
}