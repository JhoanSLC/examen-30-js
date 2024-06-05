import { LitElement, html, css } from "lit";
import { images } from "../../images";
export class imageGallery extends LitElement {
    static properties = {
        currentImageIndex : 0,
        
    }
    
    constructor() {
        super()
        this.createGallery()
    }

    static styles = css`
        .gallery { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 20px;
        }
        .thumbnail { 
            width: 100px; 
            margin: 5px; 
            cursor: pointer; 
        }
        .modal { 
            display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); justify-content: center; align-items: center; }
        .modal img { max-width: 90%; max-height: 90%; }
    `

    render() {
        return html`
            <div class="gallery-container">
                <div id="gallery" class="gallery"></div>
                <div class="modal">
                    <img @click=${this.closeModal} id="modal-image" src=""/>
                    <button @click=${this.navigate(-1)} id="prev">Previous</button>
                    <button @click=${this.navigate(1)} id="next">Next</button>
                </div>
            </div>
        `
    }

    openModal(index) {
        this.currentImageIndex = index;
        console.log(this.currentImageIndex)
        console.log(index)
        this.shadowRoot.querySelector('.modal').style.display = 'flex';
        this.updateModalImage(index);
    }

    closeModal() {
        this.shadowRoot.querySelector('.modal').style.display = "none";
    }

    navigate(direction) {
        this.currentImageIndex = ((this.currentImageIndex + direction + images.length) % images.length)
    }

    updateModalImage(index) {
        this.shadowRoot.getElementById('modal-image').src = images[index];
    }

    createGallery() {
        document.addEventListener('DOMContentLoaded', () => {
            const galleryDiv = this.shadowRoot.getElementById('gallery');
            galleryDiv.innerHTML = '';
            let counter = 0;
            images.forEach(imagen => {
                counter ++
                const imageContainer = document.createElement('div');
                const imagenItem = document.createElement('img');
                imagenItem.className = "imagen-item";
                imagenItem.src = imagen;
                imagenItem.style.width = "180px"
                imagenItem.style.height = "180px"
                imageContainer.className = "image-container";
                imageContainer.insertAdjacentElement('beforeend', imagenItem)
                galleryDiv.insertAdjacentElement('beforeend', imageContainer)

                let index = counter - 1;
                imageContainer.addEventListener('click', () => {
                    this.openModal(index)
                })
                
            })
        })
    }


}

customElements.define('image-gallery', imageGallery);