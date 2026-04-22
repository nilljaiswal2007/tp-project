function remove(){
let input = document.getElementById("a").value
let arr= input.split(",")
let res=[];
for(let i =0 ; i <arr.length;i++ ){
    arr[i]=Number(arr[i])
if(!res.includes(arr[i])){
res.push(arr[i]);
}
document.getElementById("r").innerText=res ;
}
}