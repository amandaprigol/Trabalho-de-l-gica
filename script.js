var nomeProdutos = ["Corte de Espinhos e Rosas", "Trono de Vidro", "Espada de Vidro", "A biblioteca da Meia-noite", "É Assim que Acaba", "Verity"]
var listaQuantidade = [0,0,0,0,0,0]
var produtos = [0,0,0,0,0,0,]
var totalPagar = 0
var arr = []

function add1() {
    var quantidade = document.getElementById("quantidade1").value
    var total = quantidade * 10

    if(quantidade == 0){

    }else{
        listaQuantidade.splice(0, 1, quantidade);
    }
    
    produtos.splice(0, 1, total);
    console.log(total);
    sessionStorage.setItem('listaQuantidade0', listaQuantidade[0]);
    sessionStorage.setItem('produtos0', produtos[0]);
    
}

function add2() {
    var quantidade = document.getElementById("quantidade2").value
    var total = quantidade * 20

    if(quantidade == 0){

    }else{
        listaQuantidade.splice(1, 1, quantidade);
    }

    produtos.splice(1, 1, total);
    console.log(total);
    sessionStorage.setItem('listaQuantidade1', listaQuantidade[1]);
    sessionStorage.setItem('produtos1', produtos[1]);
}

function add3() {
    var quantidade = document.getElementById("quantidade3").value
    var total = quantidade * 30

    if(quantidade == 0){
        
    }else{
        listaQuantidade.splice(2, 1, quantidade);
    }

    produtos.splice(2, 1, total);
    console.log(total);
    sessionStorage.setItem('listaQuantidade2', listaQuantidade[2]);
    sessionStorage.setItem('produtos2', produtos[2]);
}

function add4() {
    var quantidade = document.getElementById("quantidade4").value
    var total = quantidade * 40

    if(quantidade == 0){
        
    }else{
        listaQuantidade.splice(3, 1, quantidade);
    }

    produtos.splice(3, 1, total);
    console.log(total);
    sessionStorage.setItem('listaQuantidade3', listaQuantidade[3]);
    sessionStorage.setItem('produtos3', produtos[3]);
}

function add5() {
    var quantidade = document.getElementById("quantidade5").value
    var total = quantidade * 50

    if(quantidade == 0){
        
    }else{
        listaQuantidade.splice(4, 1, quantidade);
    }

    produtos.splice(4, 1, total);
    console.log(total);
    sessionStorage.setItem('listaQuantidade4', listaQuantidade[4]);
    sessionStorage.setItem('produtos4', produtos[4]);
}

function add6() {
    var quantidade = document.getElementById("quantidade6").value
    var total = quantidade * 60

    if(quantidade == 0){
        
    }else{
        listaQuantidade.splice(5, 1, quantidade);
    }

    produtos.splice(5, 1, total);
    console.log(total);
    sessionStorage.setItem('listaQuantidade5', listaQuantidade[5]);
    sessionStorage.setItem('produtos5', produtos[5]);
}

function carrinho() {

    var totalPagar = 0
    
    for (let i = 0; i < produtos.length; i++) {
        totalPagar = totalPagar + parseInt(produtos[i]);
    }

    document.getElementById("idTotal").innerHTML = totalPagar;
    document.getElementById("pProdutos").innerHTML = produtos;
    document.getElementById("qProdutos").innerHTML = listaQuantidade;
    sessionStorage.setItem('totalPrecos', totalPagar);
}


function validar() {  
    
    if(sessionStorage.getItem('listaQuantidade0') == null){
        sessionStorage.setItem('listaQuantidade0', 0)
        sessionStorage.setItem('produtos0', 0)
    }

    if(sessionStorage.getItem('listaQuantidade1') == null){
        sessionStorage.setItem('listaQuantidade1', 0)
        sessionStorage.setItem('produtos1', 0)
    }

    if(sessionStorage.getItem('listaQuantidade2') == null){
        sessionStorage.setItem('listaQuantidade2', 0)
        sessionStorage.setItem('produtos2', 0)
    }

    if(sessionStorage.getItem('listaQuantidade3') == null){
        sessionStorage.setItem('listaQuantidade3', 0)
        sessionStorage.setItem('produtos3', 0)
    }

    if(sessionStorage.getItem('listaQuantidade4') == null){
        sessionStorage.setItem('listaQuantidade4', 0)
        sessionStorage.setItem('produtos4', 0)
    }

    if(sessionStorage.getItem('listaQuantidade5') == null){
        sessionStorage.setItem('listaQuantidade5', 0)
        sessionStorage.setItem('produtos5', 0)
    }

    var Nome = document.getElementById("idNome").value
    var Cpf = document.getElementById("idCPF").value
    var Email = document.getElementById("idEmail").value
    var Telefone = document.getElementById("idTelefone").value
    var Cep = document.getElementById("idCEP").value

    var texto = "Seu nome é: " + Nome + ", Seu CPF é: " + Cpf + ", Seu email é: " + Email + ", Seu telefone é: " + Telefone + ", Seu CEP é: " + Cep + "."
     + " Você comprou: " + sessionStorage.getItem('listaQuantidade0') + " " + nomeProdutos[0] + " gastando " + sessionStorage.getItem('produtos0') +"; "
     + sessionStorage.getItem('listaQuantidade1') + " " + nomeProdutos[1] + " gastando " + sessionStorage.getItem('produtos1') +"; "
     + sessionStorage.getItem('listaQuantidade2') + " " + nomeProdutos[2] + " gastando " + sessionStorage.getItem('produtos2') +"; "
     + sessionStorage.getItem('listaQuantidade3') + " " + nomeProdutos[3] + " gastando " + sessionStorage.getItem('produtos3') +"; "
     + sessionStorage.getItem('listaQuantidade4') + " " + nomeProdutos[4] + " gastando " + sessionStorage.getItem('produtos4') +"; "
     + sessionStorage.getItem('listaQuantidade5') + " " + nomeProdutos[5] + " gastando " + sessionStorage.getItem('produtos5') +"; "
     
    alert(texto)
    document.getElementById("idInfo").innerHTML = texto

    var v = sessionStorage.getItem('totalPrecos');

    if (localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }

    let novoItem = v
    arr.push(novoItem);
    localStorage.meuArr = JSON.stringify(arr);
    
}

function valores() {
    const arrayString = localStorage.getItem('meuArr');
    const minhaArray = JSON.parse(arrayString);

    let soma = 0;
    for (let i = 0; i < minhaArray.length; i++) {
        soma += parseInt(minhaArray[i]);
    }

    document.getElementById("idTotalValores").innerHTML = soma;
}
