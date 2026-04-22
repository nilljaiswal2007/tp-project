function att(){
    let a = document.getElementById("a").value
     let arr= a.split(",");
     let pre = 0;
     let ab = 0;
     for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i].trim()
        if (arr[i]=="P" || arr[i]=="p") {
            pre++;
        }
        else if (arr[i]=="A" || arr[i]=="a") {
            ab++;
        }
     }
     document.getElementById("r").innerText="present = "+pre+"  ||  "+"absent = "+ab;
}