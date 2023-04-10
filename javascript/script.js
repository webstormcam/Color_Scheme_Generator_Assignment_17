
let colorPicked = document.getElementById('colorPicker')
let scheme = document.getElementById('scheme')
let gridItems = document.getElementsByClassName('grid-item')



/// Will Accept the values that are given
function renderColors(colorHex,pickedSelection){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${pickedSelection}`)
      .then(res => res.json())
      .then(data =>{
       
            for(let i=0;i<data.colors.length;i++){
               gridItems[i].style.backgroundColor = data.colors[i].hex.value
            }
        

        
        
       
      })
}

const formOfInfo = document.getElementById('formOfInfo').addEventListener('submit',function(e){
    e.preventDefault()
    renderColors(colorPicked.value.slice(1),scheme.value)
}) 


renderColors(colorPicked.value.slice(1),scheme.value)






