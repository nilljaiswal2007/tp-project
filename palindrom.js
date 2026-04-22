function pal(params) {
    let a = Number(document.getElementById("a").value)
    let i,b;
    let original = a;
    let c=0

    while(a>0){
      b=a%10
      c=c*10+b
      a=Math.floor(a/10)
    }
    if (original==c){
      document.getElementById("r").innerText=c +" is a palindrom number";
    }
    else{
        document.getElementById("r").innerText=c +" is not a palindrom number";
    }
    
}