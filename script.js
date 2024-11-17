let display = document.getElementById('display')
var  conta = []

function adicionar(n) {

    if(display.value != `undefined` && `ERRO`){
        conta.push(n)
        display.value += n
    }
    else{
        display.value = ''
        conta.push(n)
        display.value += n
    }
}

function eliminar() {
    conta.pop()
    display.value = ``
    for (let pos in conta) {
        display.value += `${conta[pos]}`
    }
}


function linpar(){
    for (let pos in conta){
        conta.pop()
    }
    display.value = ''
}

function calcular(){
    try {
        var res = eval(display.value)
        linpar()
        display.value = res
        
        conta.push(res)
    }
    catch(error){
        display.value = 'ERRO'
    }  
    
}
 