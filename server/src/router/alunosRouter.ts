import { Router } from 'express';
import { AlunosConttroler } from '../controller/AlunosConttroller';

const alunosRouter = Router();
const alunosController = new AlunosConttroler()

//=====================| CRIANDO ALUNOS |=========================//


alunosRouter.post('/', (req, res) => {
  const { firtName, age, grade } = req.body;

  alunosController.createAluno({firtName, age, grade});

  res.status(200).send();

});


// ======================| LISTANDO TODOS OS ALUNOS |===================//

alunosRouter.get('/', (req, res) => {
  const all = alunosController.listAlunos();
  all.then(aluno => {
    res.status(200).json(aluno);
  });
});


// =========================| ATUALIZANDO ALUNO |======================//

alunosRouter.put('/', (req, res) => {

  const { firtName, age, grade, id } = req.body;

  alunosController.updateAlunos({firtName, age, grade, id});

  res.status(200).send();

});


// =========================| DELETAR ALUNO |======================//

alunosRouter.delete('/:id', (req, res) => {
  const {id} = req.headers;
  
  const aluno = alunosController.deleteAlunos(id)

  res.send(200).json(aluno)
})

export { alunosRouter };