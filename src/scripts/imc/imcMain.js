import { calcularImc } from "./calcularImc";

document.addEventListener('DOMContentLoaded', () => {
    const formRoot = document.querySelector('calculadora-imc').shadowRoot;
    const form = formRoot.querySelector('.imc-form');
    const calcularBtn = document.querySelector('.imc-button');
    const galleryBtn = document.querySelector('.gallery-button');
    const tabla1Btn = document.querySelector('.tabla-dinamica-btn');
    const apiDataBtn = document.querySelector('.api-data-btn');
    const imcContainer = formRoot.querySelector('.imc-container');
    calcularBtn.addEventListener('click', () => {
        galleryBtn.style.display = "none";
        tabla1Btn.style.display = "none";
        apiDataBtn.style.display = "none";
        calcularBtn.style.display = "none";
        imcContainer.style.display = "flex";
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault()
       
        const peso = formRoot.querySelector('.peso-input').value;
        const alturacm = formRoot.querySelector('.altura-input').value;
        let cardContainer = formRoot.querySelector('.imc-card-container');
        let resultado = formRoot.querySelector('.resultado-imc')
        let categoria = formRoot.querySelector('.categoria')
        let imcImagen = formRoot.querySelector('.imc-imagen');
        const alturaToNumber = parseFloat(alturacm);
        let alturaMt = alturaToNumber / 100;
        
        let resultadoCalculo = calcularImc(peso, alturaMt).toFixed(2);
        console.log(resultadoCalculo);
        resultado.textContent = resultadoCalculo;

        // Peso normal
        if (resultadoCalculo <= 24.9 && resultadoCalculo >= 18.5) {
            categoria.textContent = "NORMAL";
            imcImagen.src = "public/peso-bajo.png"
        }

        // Sobrepeso
        if (resultadoCalculo <= 29.9 && resultadoCalculo >= 25) {
            categoria.textContent = "SOBREPESO";
            imcImagen.src = "public/peso-normal.png"
        }

        //Obesidad 1 
        if (resultadoCalculo <= 34.9 && resultadoCalculo >= 30) {
            categoria.textContent = "OBESIDAD 1";
            imcImagen.src = "public/sobrepeso.png"
        }

        //Obesidad 2
        if (resultadoCalculo <= 39.9 && resultadoCalculo >= 35) {
            categoria.textContent = "OBESIDAD 2";
            imcImagen.src = "public/obesidad.png"
        }

        // Obesidad 3 
        if (resultadoCalculo >= 40) {
            categoria.textContent = "OBESIDAD 3";
            imcImagen.src = "public/obesidad-extrema.png"
        }

        cardContainer.style.display = "flex";

    })

})