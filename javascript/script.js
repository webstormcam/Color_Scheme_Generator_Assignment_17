
let colorPicked = document.getElementById('colorPicker')
let scheme = document.getElementById('scheme')
let gridItems = document.getElementsByClassName('grid-item')
let colorCard = document.getElementsByClassName('grid-color-code')




function renderColors(colorHex,pickedSelection){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${pickedSelection}`)
      .then(res => res.json())
      .then(data =>{
            for(let i=0;i<data.colors.length;i++){
               gridItems[i].style.backgroundColor = data.colors[i].hex.value
               colorCard[i].innerHTML = data.colors[i].hex.value
            }
      })
}

const formOfInfo = document.getElementById('formOfInfo').addEventListener('submit',function(e){
    e.preventDefault()
    renderColors(colorPicked.value.slice(1),scheme.value)
}) 


for(const card of colorCard){
    card.addEventListener('click',function(){
        navigator.clipboard.writeText(card.innerHTML).then(function(){
            alert("Copied the text: " + card.innerHTML);
        })
        

    })
}

renderColors(colorPicked.value.slice(1),scheme.value)
