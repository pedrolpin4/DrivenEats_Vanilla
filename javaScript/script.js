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
}


