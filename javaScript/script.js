function mudarLayoutBotao () {
    let a = 0;
    for(let f = 1; f < 6; f++){
        let semCertinho = document.getElementById(`certinhoP${f}`);
        if (semCertinho.style.display != 'none') {
            a++;
        } else {
            continue
        }
    }
    for(let g = 1; g < 6; g++){
        let semCertinho = document.getElementById(`certinhoB${g}`);
        if (semCertinho.style.display != 'none') {
            a++;
        } else {
            continue
        }
    }
    for(let h = 1; h < 6; h++){
        let semCertinho = document.getElementById(`certinhoS${h}`);
        if (semCertinho.style.display != 'none') {
            a++;
        } else {
            continue
        }
    }
    if (a === 3) {
        let naoSelecionado = document.getElementById('NS');
        naoSelecionado.style.display = 'none';
        let selecionado = document.getElementById ('S');
        selecionado.style.display = 'initial';
        let botao = document.getElementById('BF');
        botao.style.background = '#32b72f';
        botao.classList.add('confirmado')
    }
}

function selecionaPrato (prato, certinho) {
    for(let i = 1; i < 6; i++){
        let verificado = document.getElementById(`prato${i}`);
        if(verificado.style.border != '0px'){
            verificado.style.border = '0px';
            verificado.classList.remove('prato-escolhido')
            let semCertinho = document.getElementById(`certinhoP${i}`);
            semCertinho.style.display = 'none';
        } else{
            continue
        }
    }
    let el = document.getElementById(prato);
    el.style.border = '4px solid #32b72f';
    el.classList.add('prato-escolhido')
    let ok = document.getElementById(certinho);
    ok.style.display = 'initial';
    mudarLayoutBotao();
}

function selecionaBebida (bebida, certinho) {
    for(let i = 1; i < 6; i++){
        let verificado = document.getElementById(`bebida${i}`);
        if(verificado.style.border != '0px'){
            verificado.style.border = '0px';
            verificado.classList.remove('prato-escolhido')
            let semCertinho = document.getElementById(`certinhoB${i}`);
            semCertinho.style.display = 'none';
        } else{
            continue
        }
    }
    let el = document.getElementById(bebida);
    el.style.border = '4px solid #32b72f';
    el.classList.add('bebida-escolhida')
    let ok = document.getElementById(certinho);
    ok.style.display = 'initial';
    mudarLayoutBotao();
}



function selecionaSobremesa (sobremesa, certinho) {
    for(let i = 1; i < 6; i++){
        let verificado = document.getElementById(`sobremesa${i}`);
        if(verificado.style.border != '0px'){
            verificado.style.border = '0px';
            verificado.classList.remove('prato-escolhido')
            let semCertinho = document.getElementById(`certinhoS${i}`);
            semCertinho.style.display = 'none';
        } else{
            continue
        }
    }
    let el = document.getElementById(sobremesa);
    el.style.border = '4px solid #32b72f';
    el.classList.add('sobremesa-escolhida')
    let ok = document.getElementById(certinho);
    ok.style.display = 'initial';
    mudarLayoutBotao();
}


function bonus(){   
    let botao = document.getElementById('BF');
    if(botao.classList.contains('confirmado')){
        let topoOpaco = document.querySelector('.top-box');
        topoOpaco.style.opacity = "0.20";
        let conteudoSite = document.querySelector('.conteudo-pagina');
        conteudoSite.style.opacity = "0.20";
        let body = document.querySelector('body');
        body.classList.add('conteudo-travado'); 
        let novaDiv = document.querySelector('.finalizacao-pedido');
        novaDiv.style.display = 'flex';
        nomes();
        precos();
        soma();
        mandarMensagem();
    }
}

function nomes() {
    let opcaoPrato = document.querySelector('.prato-escolhido .nome-opcao');
    let nomePrato = opcaoPrato.innerHTML;
    let prato = document.querySelector('.prato');
    prato.innerHTML = nomePrato;
    let opcaoBebida = document.querySelector('.bebida-escolhida .nome-opcao');
    let nomeBebida = opcaoBebida.innerHTML;
    let bebida = document.querySelector('.bebida');
    bebida.innerHTML = nomeBebida;
    let opcaoSobremesa = document.querySelector('.sobremesa-escolhida .nome-opcao');
    let nomeSobremesa = opcaoSobremesa.innerHTML;
    let sobremesa = document.querySelector('.sobremesa');
    sobremesa.innerHTML = nomeSobremesa;
}

function precos (){
    let opcaoPrato = document.querySelector('.prato-escolhido .preco');
    let precoPrato = opcaoPrato.innerHTML;
    let prato = document.querySelector('.preco-prato');
    prato.innerHTML = precoPrato;
    let opcaoBebida = document.querySelector('.bebida-escolhida .preco');
    let precoBebida = opcaoBebida.innerHTML;
    let bebida = document.querySelector('.preco-bebida');
    bebida.innerHTML = precoBebida;
    let opcaoSobremesa = document.querySelector('.sobremesa-escolhida .preco');
    let precoSobremesa = opcaoSobremesa.innerHTML;
    let sobremesa = document.querySelector('.preco-sobremesa');
    sobremesa.innerHTML = precoSobremesa;
}

function soma(){
    let total = 0;
    let prato = document.querySelector('.preco-prato');
    if (prato.innerHTML.length === 8){
        let valorPrato2 = Number(prato.innerHTML[3] + prato.innerHTML[4]);
        console.log(valorPrato2);
        total+=Number(valorPrato2);
    } else {
        let valorPrato1 = prato.innerHTML[3];
        console.log(valorPrato1);
        total+=Number(valorPrato1);
    }
    let bebida = document.querySelector('.preco-bebida');
    if (bebida.innerHTML.length === 8){
        let valorBebida2 = Number(bebida.innerHTML[3] + bebida.innerHTML[4]);
        console.log(valorBebida2);
        total+=Number(valorBebida2);
    } else {
        let valorBebida1 = bebida.innerHTML[3];
        console.log(valorBebida1);
        total+=Number(valorBebida1);
    }
    let sobremesa = document.querySelector('.preco-sobremesa');
    if (sobremesa.innerHTML.length === 8){
        let valorSobremesa2 = Number(sobremesa.innerHTML[3] + sobremesa.innerHTML[4]);
        console.log(valorSobremesa2);
        total+=Number(valorSobremesa2);
    } else {
        let valorSobremesa1 = sobremesa.innerHTML[3];
        console.log(valorSobremesa1);
        total+=Number(valorSobremesa1);
    }
    let valorTotal = document.querySelector('.total.negrito');
    valorTotal.innerHTML = `R$ ${total},00`
}

function desfazBonus (){
    let topoOpaco = document.querySelector('.top-box');
    topoOpaco.style.opacity = "1";
    let conteudoOpaco = document.querySelector('.conteudo-pagina');
    conteudoOpaco.style.opacity = "1";
    let novaDiv = document.querySelector('.finalizacao-pedido');
    novaDiv.style.display = 'none';
}

function mandarMensagem(){
    let total = document.querySelector('.total.negrito').innerHTML;
    let sobremesaN = document.querySelector('.sobremesa').innerHTML;
    let bebidaN = document.querySelector('.bebida').innerHTML;
    let pratoN = document.querySelector('.prato').innerHTML;
    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoN}
    - Bebida: ${bebidaN}
    - Sobremesa: ${sobremesaN}
    - Nome: ${prompt("Qual o seu nome?")}
    -Endereço: ${prompt('E o seu endereço?')}
    Total: ${total}` 
    let link = "https://wa.me/5521967431453?text=" + encodeURIComponent(mensagem);
    console.log(link);
    let element = document.querySelector(".link-whatsapp");
    element.setAttribute('href', link)
}