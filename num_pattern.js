function num(){
    let a = Number(document.getElementById("a").value);
    let i,j;
    for(i=1;i<=a;i++){
        for(j=1;j<=i;j++){
            document.getElementById("r").innerText+=j
        }
        document.getElementById("r").innerText+="\n";
    }
}