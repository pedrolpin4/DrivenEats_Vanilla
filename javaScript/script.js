
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
    }
}

function selecionaPrato (prato, certinho) {

    for(let i = 1; i < 6; i++){
        let verificado = document.getElementById(`prato${i}`);
        if(verificado.style.border != '0px'){
            verificado.style.border = '0px';
            let semCertinho = document.getElementById(`certinhoP${i}`);
            semCertinho.style.display = 'none';
        } else{
            continue
        }
    }

    let el = document.getElementById(prato);
    el.style.border = '4px solid #32b72f';
    let ok = document.getElementById(certinho);
    ok.style.display = 'initial';
    mudarLayoutBotao();
}

function selecionaBebida (bebida, certinho) {

    for(let i = 1; i < 6; i++){
        let verificado = document.getElementById(`bebida${i}`);
        if(verificado.style.border != '0px'){
            verificado.style.border = '0px';
            let semCertinho = document.getElementById(`certinhoB${i}`);
            semCertinho.style.display = 'none';
        } else{
            continue
        }
    }

    let el = document.getElementById(bebida);
    el.style.border = '4px solid #32b72f';
    let ok = document.getElementById(certinho);
    ok.style.display = 'initial';
    mudarLayoutBotao();
}



function selecionaSobremesa (sobremesa, certinho) {

    for(let i = 1; i < 6; i++){
        let verificado = document.getElementById(`sobremesa${i}`);
        if(verificado.style.border != '0px'){
            verificado.style.border = '0px';
            let semCertinho = document.getElementById(`certinhoS${i}`);
            semCertinho.style.display = 'none';
        } else{
            continue
        }
    }

    let el = document.getElementById(sobremesa);
    el.style.border = '4px solid #32b72f';
    let ok = document.getElementById(certinho);
    ok.style.display = 'initial';
    mudarLayoutBotao();
}


