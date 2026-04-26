function percent(){

let o = Number(document.getElementById("o").value);
let t = Number(document.getElementById("t").value);
let per = (o/t)*100;
document.getElementById("r").innerText="percent="+per+ "%" ;
}