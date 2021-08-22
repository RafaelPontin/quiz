import styles from '../styles/Enunciados.module.css';

interface EnunciadoProps{
    texto: string
}

export default function Enunciados(props: EnunciadoProps){

    return(
        <div className={styles.enunciado}>
            <span className={styles.texto}>
                {props.texto}
            </span>
        </div>
    )
}