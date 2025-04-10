export default class Termek{
    #termekObj;
    
    constructor(termekObj,szElem){
        this.#termekObj = termekObj;
        this.szElem = szElem;
        console.log(szElem);
        this.megjelenit();
        this.gombElem = document.querySelector(".card:last-child .kosarGomb");
        console.log(this.gombElem);
        this.kosarbarak();


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

    kosarbarak(){
        this.gombElem.addEventListener("click", ()=>{
            console.log("kosárgomb megnyomva!")
            const e = new CustomEvent("kosar", {detail: this.#termekObj})
            window.dispatchEvent(e);
        })

    }


}