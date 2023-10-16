let inputs = document.getElementById("inps");
let text = document.querySelector(".text");
function Add(){
    if(inputs.value == ""){
        alert("No Task Entered")
    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML=`${inputs.value} <i id="edit" class="fa-solid fa-pen-to-square"></i> <i id="delete" class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("#delete").addEventListener("click" , remove);
        function remove(){
            newElement.remove()
        }
        newElement.querySelector("#edit").addEventListener("click" , edit);
        function edit(){
            result = prompt("Enter new value:");
            newElement.innerHTML = `${result} <i id="edit" class="fa-solid fa-pen-to-square"></i> <i id="delete" class="fa-solid fa-trash"></i>`;;
            newElement.querySelector("#delete").addEventListener("click" , remove);
            function remove(){
                newElement.remove()
            }
            newElement.querySelector("#edit").addEventListener("click" , edit);
        }
    }
}