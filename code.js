let input = document.getElementById("inputs")
let button = document.getElementById('enter')
let ul = documetn.getElementById('ul')

function inputLength(){
    return input.length; 
}
function listLength(){
    return item.length;
}
function createli(){
    var li = document.createElement('li')
    li.appendChild(document.createtextnode(input.value))
    ul.appendChild(li)
    input.value
    

}

function crossout(){
    li.classlist.toggle("done")

}
li.addEventlistener("click",crossout)
 //creating a function for creating a new element.
 let btn = document.createElement('button')
 btn.appendChild(createtextnode('x'))
 li.appendChild(btn)
 btn.addEventListener("click",...)

 