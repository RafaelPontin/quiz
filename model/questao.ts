import { embaralhar } from "../functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModel{
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
    #acertou: boolean;
    //#respondida: boolean;

    constructor(id:number, enunciado:string, resposta: RespostaModel[], acertou:boolean = false) {
        this.#id= id;        
        this.#enunciado = enunciado;       
        this.#respostas = resposta;        
        this.#acertou = acertou;        
    }

    get id(){
        return this.#id;
    } 

    get enunciado(){
        return this.#enunciado;
    } 

    get resposta(){
        return this.#respostas;
    } 
    
    get acertou(){
        return this.#acertou;
    } 

    get naoRespondida(){
        return !this.respondida
    }

    get respondida(){

        for(let respota of this.#respostas){
            if(respota.revelada) return true;
        }
        return false;
    } 

    responderCom(indice: number): QuestaoModel{
        const acertou = this.#respostas[indice]?.certa;
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i;
            const deveRevelar = respostaSelecionada || resposta.certa;
            return respostaSelecionada ? resposta.revelar() : resposta;
        })

        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou);
    }

    embaralharRespostas(){
        let respostasEmbaralhadas = embaralhar(this.#respostas);
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou);
    }

    static criarUsandoObjeto(obj: QuestaoModel) : QuestaoModel{

        const respostas = obj.repostas.map(resp => RespostaModel.criarUsandoObjeto(resp));
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou);
    }

    paraObjeto(){
        return {
             id: this.#id,
             enunciado: this.#enunciado,
             respondida: this.respondida,
             acertou: this.#acertou,
             repostas: this.#respostas.map(resp => resp.paraObjeto()),
        }
    }
}