import { Router } from 'express';
import { AlunosConttroler } from '../controller/AlunosConttroller';

const alunosRouter = Router();
const alunosController = new AlunosConttroler()

alunosRouter.post('/', (req, res) => {
  const { firtName, age, grade } = req.body;

  alunosController.createAluno({firtName, age, grade});

  res.status(200).send();

});

alunosRouter.get('/', (req, res) => {
  const all = alunosController.listAlunos();
  all.then(aluno => {
    res.status(200).json(aluno);
  });
});





export { alunosRouter };