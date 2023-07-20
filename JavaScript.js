
function gerar(){
    var txt = document.getElementById('txt').value
    var res = document.getElementById('res')
    var f = document.getElementsByName('font')

    if(f[0].checked){
        document.getElementById('res').style = "font-family: Arial, Helvetica, sans-serif;"
        res.innerHTML =`${txt}`
    } else if(f[1].checked){
        document.getElementById('res').style =  "font-family: 'Courier New', Courier, monospace;"
        res.innerHTML = `${txt}`
    }else if(f[2].checked){
        document.getElementById('res').style = "font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        res.innerHTML = `${txt}`
    }else if(f[3].checked){
        document.getElementById('res').style = "font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
        res.innerHTML = `${txt}`
    }else if(f[4].checked){
        document.getElementById('res').style = "font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
        res.innerHTML = `${txt}`
    }else if(f[5].checked){
        document.getElementById('res').style = "font-family: monospace;"
        res.innerHTML = `${txt}`
    }
    
}
