var counter=0
var num=0
var row=1
var notiOut = document.getElementById('notiOut')
var submit = document.getElementById('submit')
var display = document.getElementById('display')
var cartOut = document.getElementById('cartOut')
var arr = new Array(5)


submit.addEventListener('click',displayDetails)

function addNum(){
    let name = document.getElementById('name').value
    let des = document.getElementById('des').value
    let pic = document.getElementById('pic').value
    let price = document.getElementById('price').value

    if(!name || !des || !pic || !price){
        return
    }else{
        notiOut.innerText = counter
        counter = counter+1;
        notiOut.innerText = counter
    }
}
function displayDetails(){
    let name = document.getElementById('name').value
    let des = document.getElementById('des').value
    let pic = document.getElementById('pic').value
    let img = document.createElement('img')
    img.src = pic
    let price = document.getElementById('price').value
    price += " ฿"
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-dark')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.setAttribute('onclick', 'cartList()')
    newButton.innerText = "Add to cart"

    if(!name || !des || !pic || !price){
        alert('Please fill all the boxes')
        return
    }

    let newRow = display.insertRow(row)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)
    let cell5 = newRow.insertCell(4)

    cell1.innerHTML = name
    cell2.innerHTML = des
    cell3.appendChild(img)
    cell4.innerHTML = price
    cell5.appendChild(newButton)
    row++
}
function cartList(){
    cartOut.innerText = num
    num++
    cartOut.innerText = num
}
