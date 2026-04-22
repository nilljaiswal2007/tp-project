function check(){
    let a =document.getElementById("a").value
    if(a.length<4){
        document.getElementById("r").innerText="weak password"
    }
    else if(a.length<8){
        document.getElementById("r").innerText="medium password"
    }
    else{
        document.getElementById("r").innerText="strong password"
    }
}