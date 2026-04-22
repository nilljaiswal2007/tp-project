function sea(){
    let input= document.getElementById("a").value;
    let arr = input.split(",");
    let res= -1;
    let b = Number(document.getElementById("b").value)
    for (let i = 0; i< arr.length ; i++ ){
        if( b == arr[i]){
            res = i+1;
            
            break;
        }
      }
      if(res != -1){
      document.getElementById("r").innerText="position of "+b+" is "+res;
      }
      else{
        document.getElementById("r").innerText="not found"
      }
}