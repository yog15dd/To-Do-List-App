function addItem() {
    let node = document.createElement("li");
    let text = document.getElementById("input").value;
    let newContent = document.createTextNode(text);
    node.className = "listItem";
    node.appendChild(newContent);
    if(text === ''){
        alert("You must enter some text!!")
    }
    else{
        let ul = document.getElementById("todos");
        ul.style.display = "block";
        document.getElementById("todos").appendChild(node);
        //let space = document.createElement("br");
        //document.getElementById("todos").appendChild(space);
    }
    document.getElementById("input").value = "";

    let closer = document.createElement("span");
    let content = document.createTextNode("\u00D7");
    closer.appendChild(content);
    closer.className = "closeButton";
    node.appendChild(closer);
    let close = document.getElementsByClassName("closeButton");
    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var ele = this.parentElement;
            ele.parentElement.removeChild(ele);
            if(close.length == 0){
                // let node = document.getElementById("todos");
                // while(node.firstChild){
                // document.getElementById("todos").removeChild(node.firstChild);
                // }
                let ul = document.getElementById("todos");
                ul.style.display = "none";
            }
        };
    }
}
function clearText(){
    var ele = this.parentElement;
    //ele.parentElement.removeChild(ele);
    ele.style.display = "none";
}
function clearAll(){
    let node = document.getElementById("todos");
    while(node.firstChild){
        node.removeChild(node.firstChild);
    }
    let ul = document.getElementById("todos");
    ul.style.display = "none";
}