import { embaralhar } from '../../../functions/arrays';
import banco from '../BancoDeQuestoes';
export default (req, res) => {

    const id = banco.map(questao => questao.id);


    res.status(200).json(embaralhar(id));
}