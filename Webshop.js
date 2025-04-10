import Termek from "./Termek.js";
import KosarTermek from "./KosarTermek.js";
import {TERMEKLISTA} from "./termekLista.js";


export default class Webshop{
    #lista;
    #kosarLista;
    #termekGomb;
    #kosarGomb;
    szElem;

    constructor(szElem){
        this.szElem = szElem;
        console.log(szElem)
        this.#lista = TERMEKLISTA;
        this.#kosarLista = [];
        this.#termekGomb = document.querySelector("#termekSzulo");
        this.#kosarGomb = document.querySelector("#kosarSzulo");
        this.gombokMegjelenit();
        this.termekMegjelenit();
        this.gombEsemenyek();
        this.kosarEvent();
    }

    gombokMegjelenit(){
        let html1 = `<a class="nav-link" href="#index"><button type="button" id="termekGomb">Termék</button></a>`
        let html2 = `<a class="nav-link" href="#index"><button type="button" id="kosarGomb">Kosár</button></a>`
        this.#termekGomb.insertAdjacentHTML("beforeend",html1);
        this.#kosarGomb.insertAdjacentHTML("beforeend",html2);
    }

    gombEsemenyek(){
        console.log(document.querySelector("#termekGomb"))
        document.querySelector("#termekGomb").addEventListener("click", ()=>{
            this.termekMegjelenit();

        })

        document.querySelector("#kosarGomb").addEventListener("click", ()=>{
            console.log(this.#kosarLista[0])
            this.kosarMegjelenit();

        })
    }


    termekMegjelenit(){
        this.szElem.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            new Termek(this.#lista[index],document.querySelector("#termek"));
            
        }



    }

    kosarMegjelenit(){
        this.szElem.innerHTML = "";
        for (let index = 0; index < this.#kosarLista.length; index++) {
            new KosarTermek(this.#kosarLista[i], index);
            
        }
    }


    kosarEvent(){
        window.addEventListener("kosar", (event)=>{
            console.log("kosáradatok megkapva!")
            console.log(event.detail);
            this.#kosarLista.push(event.detail)
            
        })
    }






}
