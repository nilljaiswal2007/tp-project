function km_m(params) {
    let a = Number(document.getElementById("a").value)
    let m = a * 1000
    document.getElementById("r").innerText=m+"meter";
}
function m_km(){
    let a = Number(document.getElementById("a").value)
    let m = a / 1000;
    document.getElementById("r").innerText=m+"kilo meter"
}