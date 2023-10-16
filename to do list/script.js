let inputs = document.getElementById("inps");
let text = document.querySelector(".text");
function Add(){
    if(inputs.value == ""){
        alert("No Task Entered")
    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newElement.remove()
        }
    }
}
function ClearAll(){
    if(text.innerHTML != '')
        text.querySelectorAll('ul').forEach(i => i.remove());
}