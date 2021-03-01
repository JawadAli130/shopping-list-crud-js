var input = document.getElementById("txtInput");
var enterBtn = document.getElementById("enterBtn");
var list = document.querySelector("ul");
var delBtn = document.getElementsByClassName("del");
var clearBtn = document.getElementById("clearBtn");
for(var i=0;i<delBtn.length;i++){
    delBtn[i].onclick=removeLi;
}

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function removeLi(evt){
	evt.target.parentNode.remove();
} 


function createListElement(){
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    list.appendChild(li);
    input.value="";
    btn.onclick=removeLi;
}

function addListAftercClick(){
    if(input.value!=""){
        createListElement();
    }
}
function addListAfterPress(event){
    if(input.value!="" && event.keyCode == 13){
        createListElement();
    }
}
function clearList(){
    list.innerHTML="";
}

enterBtn.addEventListener("click",addListAftercClick);
input.addEventListener("keypress",addListAfterPress);
list.addEventListener("click", strikeThrough);
clearBtn.addEventListener("click",clearList);
