function bmi(){
let w = Number(document.getElementById("w").value );
let h = Number(document.getElementById("h").value);
let BMI = (w*10000)/(h*h);
document.getElementById("r").innerText=BMI;
}