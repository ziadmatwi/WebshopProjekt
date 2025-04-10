import Termek from "./termekLista.js";
import termekLista from "./termekLista.js"

export default class Webshop{
    #lista;
    #kosarLista;
    #termekGomb;
    #kosarGomb;

    constructor(szElem){
        this.szElem = szElem;
        this.#lista = termekLista;
        this.#kosarLista = [];
        this.#termekGomb = document.querySelector("#termek");
        this.#kosarGomb = document.querySelector("#kosar");
        this.gombokMegjelenit();
        this.termekMegjelenit();
        this.gombEsemenyek();
    }

    gombokMegjelenit(){
        let html1 = `<p> <button type="button" id="termekGomb">Termék</button> </p>`
        let html2 = `<p> <button type="button" id="kosarGomb">Kosár</button> </p>`
        this.#termekGomb.insertAdjacentHTML("beforeend",html1);
        this.#kosarGomb.insertAdjacentHTML("beforeend",html2);
    }

    gombEsemenyek(){
        document.querySelector("#termekGomb").addEventListener("click", ()=>{
            this.termekMegjelenit();

        })

        document.querySelector("#kosarGomb").addEventListener("click", ()=>{
            
            this.kosarMegjelenit();

        })
    }


    termekMegjelenit(){
        this.szElem.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            new Termek(this.#lista[i]);
            
        }



    }

    kosarMegjelenit(){
        this.szElem.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            new KosarTermek(this.#kosarLista[i]);
            
        }
    }


    kosarEvent(){
        window.addEventListener("kosar", (event)=>{
            console.log(event.detail);
            this.#kosarLista.push(event.detail)
            this.megjelenitListaElemek();
        })
    }






}
