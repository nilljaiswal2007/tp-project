function grade(){

let i = Number(document.getElementById("grade").value);
if (i >= 90) {
    document.getElementById("r1").innerText ="Grade= A";

}
else if (i >= 80) {
    document.getElementById("r1").innerText ="Grade= B";
}
else if (i>=70){
    document.getElementById("r1").innerText="Grade= C"
} 
else if (i>=60){
    document.getElementById("r1").innerText="Grade= D"
}
else if(i<60){
    document.getElementById("r1").innerText="Fail"
} 
}