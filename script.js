let display = document.getElementById('display')

function adicionar(n) {
    display.value += n
    
}

function linpar(){
    display.value = ''
}

function calcular(){
    try {
        var res = eval(display.value)
        display.value = res
        var conta =[res]
    }
    catch(error){
        display.value = 'ERRO'
    }  
    
}
 