import { LitElement, html, css } from "lit";

export class calculadoraImc extends LitElement {
    constructor() {
        super()
    }

    static styles = css`
        .imc-container {
            display: none;
            flex-direction: column;
            text-align: center;
            width: 100%
            height: 100vh;
        }

        .imc-form {
            display: flex;
            flex-direction: column;
            justify-self: center;
            align-self: center;
            text-align: center;
            margin-top: 2rem;

            .input-container {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .input-container:nth-of-type(2) {
                margin-top: 2rem;
            }

            .imc-submit {
                margin-top: 2rem;
                text-align: center;
                cursor: pointer;
                background-color: aqua;
                border: black solid 2px;
                border-radius: 7px;
            }
        }

        .imc-card-container {
            display: none;
            flex-direction: column;
            align-items: center;
            margin-top: 5rem;
        }
    `

    

    render() {
        return html `
        <div class="imc-container">
            <div class="header-container">
                <h1 class="header-title">Calculadora de índice de masa corporal</h1>
                <p class="header-text">Por favor digite los datos a continuación</p>
            </div>
    
            <form action="" class="imc-form">
                <article class="input-container">
                <label for="peso">Indique su peso en kilogramos (Kg)</label>
                <input type="number" name="peso" class="peso-input" placeholder="60" required>
            </article>
        
            <article class="input-container">
                <label for="altura">Indique su altura en centimetros (CM)</label>
                <input type="number" name="altura" placeholder="173" class="altura-input" required>
            </article>
    
            <button type="submit" class="imc-submit">Calcular</button>
            </form>

            <div class="imc-card-container">
                <p class="imc-resultado-texto">Su índice de masa corporal es de: <span class="resultado-imc">0</span></p>
                <img src="" class="imc-imagen" alt="imagen de imc" />
                <p class="imc-categoria">Se encuentra en categoría <span class="categoria"> ??? </span></p>
            </div>
        </div> 
        `
    }
}

customElements.define('calculadora-imc', calculadoraImc);