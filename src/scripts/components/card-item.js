/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import restaurants from '../../DATA.json';

class Card extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  dataCard(data) {
    let card = '';
    for (const item of data.restaurants) {
      card += `
            <div class="card">
                <div class="card-container">
                    <div class="card-img">
                         <img src= "${item.pictureId}" alt = "${item.name}">      
                         </div>
                         <div class="card-text">
                             <div class="card-star">
                             Rating : ${item.rating}
                             </div>
                             <div class="card-title">
                             <a href="" aria-label="${item.name}"> ${item.name}</a>
                             </div>
                             <div class="card-desc">
                             ${item.description}
                             </div>
                         </div>
                       </div>
                     </div>`;
    }
    return card;
  }

  // bagian item.name
  // kasi <a href="">${item.name}</a>
  // requirement aksessibility tiap element yang bisa di akses dengan tab memiliki min-width:44px dan min-height:44px
  // selain itu tag anchor dikasi properti arial-label="deskripsi anchor tsb"

  render() {
    this.innerHTML = `
                    <div class="container-card content">
                    ${this.dataCard(restaurants)}
                    </div>
                            `;
  }
}
customElements.define('card-item', Card);
