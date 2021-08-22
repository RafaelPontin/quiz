import styles from '../styles/Resultados.module.css';
import { useRouter } from "next/router"
import Estatistica from '../components/Estatistica.tsx';
import Botao from '../components/Botao.tsx';

export default function Resultado(){

    const router = useRouter();

    const total = +router.query.total;
    const certa = +router.query.certas;
    const percentual = Math.round((certa/total) * 100);

    return(
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
           <div style={{display: 'flex'}}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Certas" valor={certa} corFundo="#9CD5A4"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#DE6433" />
           </div>
           <Botao href="/" text="Tentar novamente"/>
        </div>
    )
}