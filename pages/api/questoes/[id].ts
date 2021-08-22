import questoes from '../BancoDeQuestoes';
export default function handler(req, res) {

  const idSelecionada = + req.query.id;
  const questoesSeleciondas = questoes.filter(questao => questao.id === idSelecionada);

  if(questoesSeleciondas.length === 1){
    const questao = questoesSeleciondas[0].embaralharRespostas();
    res.status(200).json(questao.paraObjeto());
  }else{
    res.status(204).send();
  }

    
  }
  