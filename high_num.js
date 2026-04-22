function high(){
    let arr = [10,42,76.82,56,97];
    let max = arr[0];
    for(let i = 1 ; i<arr.length ; i++){
        if(arr[i] > max){
            max= arr[i];
        }
    }
    document.getElementById("r").innerText="laegest =" + max; 
}