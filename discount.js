function dis(){
    let o = Number(document.getElementById("orignal").value)
    let d = Number(document.getElementById("discount").value)
    let discount=  (o*d)/100
     let final = o - discount
     document.getElementById("r").innerText="discount="+discount+" |  final price="+final;
}