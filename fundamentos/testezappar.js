const display_shown = symbol.controllers.display.elements.shown;
const display_hidden = symbol.controllers.display.elements.hidden;
const actvBtn = symbol.nodes.actvBtn;
const personagem = symbol.nodes.Personagem;
const hotspot = symbol.nodes.hotspot;
const inimigo = symbol.nodes.Inimigo;
const berro = symbol.nodes.Berro;

let pos;
let pointerPos;
let inimigoPos;
let SpaceMin;
let SpaceMax;
let dano = 0;
let levouDano = false;
let Ini_fakeColision = false;

parent.on("show", () => {
    display_hidden.reset();
    display_shown.activate();
    iniciar();
});

//Funcao para iniciar///////////////////////////////////////////////////////////

function iniciar(){
    Z.every(5, checkDano);
	Z.every(5000, CtrlDedo);
	Z.every(1500, ctrlDano);
	berro.controllers.animacoes.elements.correndo.play();
	symbol.controllers.Cenario.elements.loop.play();
	CtrlDedo();
    hotspot.enabled(false);
    inimigoPos = inimigo.position();
}

//Funcoes para controle do dedo/////////////////////////////////////////////////

function getPosDedo(min, max){
    pos = Math.random() * (max - min + 1) + min;
    inimigo.position([pos, 2, 0]);
}

function movimentacaoDedo(state, valor1, valor2, qtdVezes) {
    for(var i = 0; i < qtdVezes; i++){
        Z.after((1* i), ()=>{
            stateDedo(state, valor1, valor2);
        });
    }
    valor1 = Math.floor(valor1);
    inimigo.position([pos, valor1, 0]);
    console.log(inimigo.position());
}

function stateDedo(state, valor1, valor2){
    if(state === 'desce') {
        valor1 -= 0.01;
        if(valor1 >= (valor2)){
            inimigo.position([pos, valor1, 0]);
        }else{
            return true;
        }
    }else if(state == 'sobe') {
        valor1 += 0.01;
        if(valor1 <= (valor2)){
            inimigo.position([pos, valor1, 0]);
        }else{
            return true;
        }
    }
}

function CtrlDedo(){
    getPosDedo(-1, 1);
    Z.after(1000, () => {
        movimentacaoDedo('desce', 2, 1.5, 51);
        Z.after(570, () => {
            movimentacaoDedo('desce', 1.5, 0, 151);
            Z.after(2000, () => {
                movimentacaoDedo('sobe', 0, 2, 200);
            });
        });
    });
}

//checagem de dano//////////////////////////////////////////////////////////////

function checkDano(){
    if(dano === 3){
        Z.everyOff(CtrlDedo);
        berro.controllers.animacoes.elements.correndo.stop();
        berro.controllers.animacoes.elements.morreu.play();
        symbol.controllers.Cenario.elements.loop.stop();
        hotspot.enabled(false);
        inimigo.position([pos, 2, 0]);
        Z.everyOff(fakeColision);
    }
}

function ctrlDano(){
    if(levouDano === true){
        Z.device.vibrate();
        symbol.controllers.dano.elements.loop.reset().play();
        dano++;
    }
}

//controle de colisao //////////////////////////////////////////////////////////

function fakeColision(){
    if((inimigoPos[1] >= 0) && (inimigoPos[1] <= 0.5)){
        if((pointerPos[0] >=SpaceMin)&&(pointerPos[0]<=SpaceMax)){
            levouDano = true;
        }else{
            levouDano = false;
        }
    }else{
        levouDano = false;
    }
}

//controle do personagem////////////////////////////////////////////////////////

actvBtn.on("pointerdown", (e) => {
	hotspot.enabled(true);
	actvBtn.enabled(false);
});

hotspot.on("pointerleave", (e) => {
    hotspot.enabled(false);
    actvBtn.enabled(true);
})

hotspot.on("pointermove", (e) => {
    pointerPos = e.localPosition;
    personagem.position([pointerPos[0], -0.5, 0]);
    inimigoPos = inimigo.position();
    SpaceMin = pos - 0.3;
    SpaceMax = pos + 0.3;
    if(!Ini_fakeColision){
        Z.every(30, fakeColision);
        Ini_fakeColision = true;
    }
});