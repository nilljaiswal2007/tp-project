function signal(params) {
    let c = document.getElementById("signal").value
    c=c.toLowerCase();
    if (c=="red") {
        document.getElementById("r").innerText="stop";
    }
    else if (c == "yellow"){
        document.getElementById("r").innerText="wait";
    
    }
    else{
        document.getElementById("r").innerText="go";
    }
}