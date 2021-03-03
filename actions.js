var input = document.getElementById("txtInput");
var enterBtn = document.getElementById("enterBtn");
var list = document.querySelector("ul");
var delBtn = document.getElementsByClassName("del");
var updateBtn = document.getElementsByClassName("update");
var clearBtn = document.getElementById("clearBtn");

for(var i=0;i<updateBtn.length;i++){
    updateBtn[i].onclick=updateContent;
}

for(var i=0;i<delBtn.length;i++){
    delBtn[i].onclick=removeLi;
}

function updateContent(e){
    var val = e.target.parentNode.firstChild;
    String(val);
    document.getElementById("txtInput").value=val;
} 
//strike through function
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        input.value=e.target.innerHTML;
    }
}

//deleting a list item
function removeLi(evt){
	evt.target.parentNode.remove();
} 

//creating new li element
function createListElement(){
    var li = document.createElement("li");

    var btn = document.createElement("button");
    var upBtn = document.createElement("button");

    upBtn.appendChild(document.createTextNode("Update"));
    btn.appendChild(document.createTextNode("Delete"));

    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    li.appendChild(upBtn);

    list.appendChild(li);
    input.value="";
    btn.onclick=removeLi;
    upBtn.onclick=updateContent;
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
//clearng list
function clearList(){
    list.innerHTML="";
}

enterBtn.addEventListener("click",addListAftercClick);
input.addEventListener("keypress",addListAfterPress);
list.addEventListener("click", strikeThrough);
clearBtn.addEventListener("click",clearList);
