var button = document.getElementById('output')
var text = ""

var outputContainer = document.getElementById('output-container')
var counter=0

function onOKClicked(e){
    e.stopPropagation();
    // alert('ok clicked')
    // text = text+"ok\n"
    // button.innerText=text //innerText ใช้ \n
    addNode()
}
function onCancelClicked(e){
    e.stopPropagation();
    // alert('cancel clicked')
    // text = text+"cancel\n"
    // button.innerText=text
}
function onNoClicked(e){
    e.stopPropagation();
    // alert('no clicked')
    // text = text+"no\n"
    // button.innerText=text
}
function onConClicked(e){
    // alert('container clicked')
    // text = ""
    // button.innerText = ""
}
function addNode(){
    newNode = document.createElement('div') //สร้าง div ใน output-container
    newNode.classList.add('flex-item') //เพิ่ม flex-item ใน div เช่น <div class="flex-item" id="0">1</div>
    newNode.setAttribute('id',counter) // set ค่า id ด้วย counter นับจาก 0 เพิ่มไปเรื่อยๆเมื่อกดปุ่ม <div class="flex-item" id="0">1</div>
    newNode.innerText = counter  //แสดงข้อความจาก counter ลงใน newNode หรือ div
    counter = counter+1  
    newNode.innerText = counter  //แสดงข้อความจาก counter ลงใน newNode หรือ div
    outputContainer.appendChild(newNode) //appendChild() ทำให้ newNode เชื่อมต่อแบบลูกกับ outputContainer
}


document.getElementById('cancel').addEventListener('click',onCancelClicked)
document.getElementById('no').onclick = onNoClicked

