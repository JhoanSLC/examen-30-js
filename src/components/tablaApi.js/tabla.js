import { LitElement, html, css } from "lit";


const URL = "https://jsonplaceholder.typicode.com/users"

export class tablaApi extends LitElement {
    constructor() {
        super()
        this.fullProcess();
    }
    static styles = css`

        .api-container { 
            display: none;
            width: 100vw;
            height: 100vh;
            text-align: left;
            font-family: Arial, sans-serif; 
        }
        .list-item { 
            cursor: pointer; 
            padding: 10px; 
            border: 1px solid #ccc; 
            margin: 5px 0; 
        }
        .list-item:hover { 
            background-color: #f0f0f0; 
        }
        .details { 
            margin-top: 10px; 
        }
        button { 
            margin-top: 10px; 
            padding: 10px; 
        }
        .list-container {
            display: flex;
            flex-direction: column;

        }

    `

    
    
    render() {
        return html`
        <div class="api-container">
        <button @click=${this.actualizarDatos()} id="fetch-button">Actualizar Datos</button>
        <div id="list-container"></div>
        <div id="details-container" class="details"></div>
        </div>
        `
    }
    async fetchData() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            return data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    renderList(data) {
        const listContainer = this.shadowRoot.getElementById('list-container');
        listContainer.innerHTML = '';
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.textContent = item.name;
            listItem.addEventListener('click', () => this.showDetails(item))
            listContainer.insertAdjacentElement('beforeend', listItem)
        })
    }
    
    async fullProcess() {
        const data = await this.fetchData();
        this.renderList(data)
    }
    
    showDetails(item) {
        const detailsContainer = this.shadowRoot.getElementById('details-container');
        const listItems = this.shadowRoot.querySelectorAll('list-item');
        detailsContainer.innerHTML = `
        <h3>${item.name}</h3>
        <p>Email: ${item.email}</p>
        <p>Phone: ${item.phone}</p>
        <p>Website: ${item.website}</p>
        <p>Company: ${item.company}</p>
        <p>Address: ${item.address}</p>
        `
    }

    actualizarDatos() {
        this.fetchData()
    }
}

customElements.define('tabla-api', tablaApi)