var counter=0
var row=1
var notiOut = document.getElementById('notiOut')
var submit = document.getElementById('submit')
var display = document.getElementById('display')

submit.addEventListener('click',displayDetails)

function addNum(){
    notiOut.innerText = counter
    counter = counter+1;
    notiOut.innerText = counter
}
function displayDetails(){
    let name = document.getElementById('name').value
    let des = document.getElementById('des').value
    let pic = document.getElementById('pic').value
    let img = document.createElement('img')
    img.src = pic

    if(!name || !des || !pic){
        alert('Please fill the boxes')
        return
    }

    let newRow = display.insertRow(row)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)

    cell1.innerHTML = name
    cell2.innerHTML = des
    // cell3.innerHTML = img  //****
    // document.body.appendChild(img)  //****
    cell3.appendChild(img)
    row++
}

