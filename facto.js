function facto(){
    let a = Number(document.getElementById("a").value)
    let i ;
    let f =1
    for(i=1;i<=a;i++){
         f=f*i;
    }
    document.getElementById("r").innerText="Factorial="+f;
}