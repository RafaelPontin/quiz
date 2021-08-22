import styles from '../styles/Questao.module.css';
import QuestaoModel from "../model/questao";
import Enunciados from './Enunciados';
import Respostas from './Resposta';
import Temporizador from './Temporizador';

const letras = [
    {valor: 'A', cor: '#F2C866' },
    {valor: 'B', cor: '#F266BA' },
    {valor: 'C', cor: '#85D4F2' },
    {valor: 'D', cor: '#BCE596' },
];


interface QuestaoProps {
    valor: QuestaoModel,
    respostaFornecida: (indice:number) => void;
    tempoEsgotado: () => void;
    tempoParaResposta?:number
} 

export default function Questao(props: QuestaoProps){

    const questao = props.valor;

    function rederizarRespostas(){
        return questao.resposta.map((reposta, index) => {
            return <Respostas 
                        key={`${questao.id}-${index}`}
                        valor = {reposta}
                        indice = {index}
                        letra = {letras[index].valor}
                        corFundoLetra={letras[index].cor}
                        respostaFornecida={props.respostaFornecida}
            />
        })
    }

    return(
            <div className={styles.questao}>
                <Enunciados texto={props.valor.enunciado}/>
                <Temporizador duracao={props.tempoParaResposta ?? 10} 
                              tempoEsgotado={props.tempoEsgotado}
                              key={questao.id}
                />
                {rederizarRespostas()}
            </div>
    );
}