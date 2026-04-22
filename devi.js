function div(){
    let a = Number(document.getElementById("a").value)
    let i;
    let found =0;
    for(i=2;i<=a-1;i++){
     if(a%i ==0){
        found=1;
     }
    }
    if(found==1){
        document.getElementById("r").innerText="it is not a prime number"
    }
    else{
        document.getElementById("r").innerText="it is a prime"
    }
}