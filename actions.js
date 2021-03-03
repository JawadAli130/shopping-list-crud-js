var input = document.getElementById("txtInput");
var enterBtn = document.getElementById("enterBtn");
var list = document.querySelector("ul");
var delBtn = document.getElementsByClassName("del");
var updateBtn = document.getElementsByClassName("update");
var clearBtn = document.getElementById("clearBtn");

function stripHtml(html)
{
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}


for(var i=0;i<updateBtn.length;i++){
    updateBtn[i].onclick=updateContent;
}

for(var i=0;i<delBtn.length;i++){
    delBtn[i].onclick=removeLi;
}

function updateContent(e){
    const str = stripHtml(e.target.parentNode.innerHTML);
    const str2 = str.replace("Update","").replace("Delete","");
    input.value=str2.trim();
    removeLi(e);
} 
//strike through function
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
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
    var updatebtn = document.createElement("button");

    btn.appendChild(document.createTextNode("Delete"));
    updatebtn.appendChild(document.createTextNode("Update"));

    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    li.appendChild(updatebtn);

    list.appendChild(li);
    input.value="";
    btn.onclick=removeLi;
    updatebtn.onclick=updateContent;
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
