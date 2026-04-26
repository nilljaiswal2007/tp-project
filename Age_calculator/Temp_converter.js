function tem(){
let fi = Number(document.getElementById("fi").value);
let ci = Number(document.getElementById("ci").value);
let fo= ((9/5)*ci)+32; 
let co = (5/9)*(fi-32);
document.getElementById("r1").innerText="Fahrenheit ="+fo;
document.getElementById("r2").innerText="Celsius ="+co;
}