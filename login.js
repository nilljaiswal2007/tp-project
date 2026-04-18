function login(params) {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user=="admin"&& pass=="1234") {
        document.getElementById("r").innerText="Login success"
    }
    else{
        document.getElementById("r").innerText="Invalid login"
    }
}