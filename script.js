const inputbox = document.getElementById("input");
const listContainer = document.getElementById("listcontainer");
function addtask(){
    if(inputbox.value === ''){
        alert("you must add yor tasks to do!");

    }else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();