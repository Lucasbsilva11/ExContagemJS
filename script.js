function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        // alert('[ERRO] faltam dados')
        res.innerHTML = '<strong>Impossível contar!</strong>'
    }else{
        res.innerHTML = 'contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //alerta para preenchimento inválido ou do valor 0 no campo contar.
        if(p <= 0){ 
            alert('Passo inválido! Considerando PASSO 1 ')
            p = 1
        }
        if (i < f){

            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F603} `
            }
            res.innerHTML += `\u{1F3C1} `
        }else {
            //CONTAGEM REGRESSIVA
            for(let c = i; c >=f; c -= p){
                res.innerHTML += `${c} \u{1F603} `
            }
            res.innerHTML += `\u{1F3C1} `
        }
    }

}