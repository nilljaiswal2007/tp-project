let task = []
function add(){
    let input = document.getElementById("task").value
    if(input==""){
        return;
    }
    task.push(input);
    document.getElementById("task").value="";
    show();
}
function show(){
    let output = ""
    for (let i = 0; i < task.length; i++) {
        output += `<li> ${task[i]} 
        <button onclick="complet(${i})"> complet </button>
        <button onclick="del(${i})"> delete </button>
        </li>`
        
        
    }
    document.getElementById("list").innerHTML=output
}
function del(index){
        task.splice(index,1);
        show();
}
function complet(index){
task[index]="<s>"+task[index]+

"</s>"
show();
}