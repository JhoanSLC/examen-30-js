document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('image-gallery').shadowRoot;
    const calcularBtn = document.querySelector('.imc-button');
    const galleryBtn = document.querySelector('.gallery-button');
    const tabla1Btn = document.querySelector('.tabla-dinamica-btn');
    const apiDataBtn = document.querySelector('.gallery-button');
    const apiContainer = root.querySelector('.gallery-container');
    apiDataBtn.addEventListener('click', () => {
        galleryBtn.style.display = "none";
        tabla1Btn.style.display = "none";
        apiDataBtn.style.display = "none";
        calcularBtn.style.display = "none";
        apiContainer.style.display = "block";
    })

})