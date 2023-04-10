
let colorPicked = document.getElementById('colorPicker')
let scheme = document.getElementById('scheme')


/// Will Accept the values that are given
function renderColors(colorHex,pickedSelection){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${pickedSelection}`)
      .then(res => res.json())
      .then(data =>{
        console.log(data.colors)
        for(const color of data.colors){
            console.log(color.hex.value)
        }
        
       
      })
}

const formOfInfo = document.getElementById('formOfInfo').addEventListener('submit',function(e){
    e.preventDefault()
    renderColors(colorPicked.value.slice(1),scheme.value)
}) 


renderColors(colorPicked.value.slice(1),scheme.value)






