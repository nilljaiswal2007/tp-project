let cart=[]
function add(){
    let name = document.getElementById("name").value
    let qty =  document.getElementById("qty").value
    let price = document.getElementById("price").value
    if(name==""||qty==""||price==""){
      return;
    }
    let product = {
        name :name,
        qty:qty,
        price:price
    }
    cart.push(product);
    show();
}
function show(){
    let total=0;
    let output;
    for (let i = 0; i < cart.length; i++) {
        let totalitm = cart[i].qty * cart[i].price;
        total += totalitm;
        output += `<li>
        ${cart[i].name}| qty :  ${cart[i].qty} | price :  ${cart[i].price} | total : ${totalitm}
        </li>`
        
    }
    document.getElementById("list").innerHTML=output
    document.getElementById("r").innerText="grand total="+total
}