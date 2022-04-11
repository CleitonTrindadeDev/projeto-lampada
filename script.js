
const onOff = document.getElementById("onOff");
const lamp = document.getElementById("lamp");

function lampadaQuebrada () {
    //indexOf metodo que varra um string e verifica se dentro do src tem a palavra quebrada
    return lamp.src.indexOf("quebrada") > -1
}

function button(){

}

function ligarLamp () {
    if(!lampadaQuebrada()){
        lamp.src = "./img/ligada.jpg";
    }
}

function desligarLamp () {
    if (!lampadaQuebrada()){
        lamp.src = "./img/desligada.jpg";
    }  
}

function quebrarLamp () {
    lamp.src = "./img/quebrada.jpg";
}

function ligarDesligar (){
    if(onOff.textContent == 'Ligar'){
        ligarLamp()
        onOff.textContent = "Desligar";
    }else {
        desligarLamp();
        onOff.textContent="Ligar";
    }
}


onOff.addEventListener ("click", ligarDesligar);
lamp.addEventListener("dblclick", quebrarLamp)
