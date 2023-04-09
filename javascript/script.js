document.getElementById('colorPicker').onchange = function(){
    console.log(this.value)
}

/// Will Accept the values that are given
function renderColors(){
    fetch(`https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic`)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
}


renderColors()


