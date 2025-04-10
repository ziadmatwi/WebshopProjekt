export default class KosarTermek{
    #termekObj;
    #index;
    
    constructor(termekObj,szElem, index){
        this.#termekObj = termekObj;
        this.szElem = szElem;
        console.log(szElem);
        this.megjelenit();
        console.log(this.gombElem);
        this.kosarbarak();
        this.#index = index;


    }

    megjelenit(){
        let html = `<div class="card shadow-sm">
                    <img src="${this.#termekObj.kep}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">${this.#termekObj.nev}</h5>
                        <p class="card-text">Ár: ${this.#termekObj.ar}</p>
                        <p class="card-text">Platform: ${this.#termekObj.platform}</p>
                        <button class="btn btn-primary kosarGomb">Add to Cart</button>
                    </div>
                    </div>`
        this.szElem.insertAdjacentHTML("beforeend",html);
    }

    


}