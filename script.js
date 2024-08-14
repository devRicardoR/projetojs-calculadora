const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const limpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const calc_aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")
const img_calc_aba = document.getElementById("img_calc_aba")

let sinal = false;
let decimal = false;
let ligar = true;

ton.addEventListener("click", () => {
    ligar = !ligar; 

    if (!ligar) {
        display.innerHTML = "Desligada";
        ton.innerHTML = "OFF";
        teclasNum.forEach(el => el.disabled = true);
        teclasOp.forEach(el => el.disabled = true);
        teclaRes.disabled = true;
        limpar.disabled = true;
        tigual.disabled = true;
    } else {
        display.innerHTML = "0";
        ton.innerHTML = "ON";
        teclasNum.forEach(el => el.disabled = false);
        teclasOp.forEach(el => el.disabled = false);
        teclaRes.disabled = false;
        limpar.disabled = false;
        tigual.disabled = false;
    }
});

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})


teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal){
            sinal = true
            if(display.innerHTML == '0'){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
        display.innerHTML = res
})

calc_aba.addEventListener("click", (evt) => {
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        img_calc_aba.setAttribute("src", "setaEsquerda.png")
    }else{
        img_calc_aba.setAttribute("src", "setaDireita.png")
    }
})
