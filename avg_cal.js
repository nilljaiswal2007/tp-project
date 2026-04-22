function avg(){
    let arr=[67,69,56,68,34,90];
    let sum=0
    for(let i=0;i<arr.length;i++ ){
        sum=sum + arr[i];
    }
    let average = sum/arr.length;
    document.getElementById("r").innerText="average = "+average;
}