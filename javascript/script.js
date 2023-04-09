document.getElementById('colorPicker').onchange = function(){
    console.log(this.value)
}


function renderColors(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${pickedMode}`)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
}


