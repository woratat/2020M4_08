var searchButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')

var noti = document.getElementById('searchButton')
var notiOut = document.getElementById('notiOut')
var counter=0

function addText(){
    let text = inputText.value  //value ค่าที่เก็บไว้ใน text field
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = text
    output.appendChild(newButton)
}
function addNum(){
    notiOut.innerText = counter
    counter = counter+1;
    notiOut.innerText = counter
}
searchButton.addEventListener('click',addText)
inputText.addEventListener('blur',addText)