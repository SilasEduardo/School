import { Router } from 'express';
import { AlunosConttroler } from '../controller/AlunosConttroller';

const alunosRouter = Router();
const alunosController = new AlunosConttroler()

//=====================| CRIANDO ALUNOS |=========================//


alunosRouter.post('/', (req, res) => {
  const { firtName, age, grade, email, status } = req.body;

  const alunos = alunosController.createAluno({firtName, age, grade, email, status});
  alunos.then(aluno => {
    if(!aluno){
      res.status(400).send("Email já Cadstrado");
    }else{
      res.status(200).send();
    };
  });
});


// ======================| LISTANDO TODOS OS ALUNOS |===================//

alunosRouter.get('/', (req, res) => {
  const all = alunosController.listAlunos();
  all.then(aluno => {
    res.status(200).json(aluno);
  });
});


// =========================| ATUALIZANDO ALUNO |======================//

alunosRouter.put('/:id', (req, res) => {
  const id  = parseInt(req.params.id);
  
  const { firtName, email, age, grade, status } = req.body;

  const alunos = alunosController.updateAlunos({firtName, email , age, grade, id, status});


  alunos.then(aluno => {
    if(!aluno){
      res.status(400).send("Erro usuario não existe ");
    }else{
      res.status(200).send();
    };
  });

});


// =========================| DELETAR ALUNO |======================//

alunosRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    const alunos = alunosController.deleteAlunos(parseInt(id));

    alunos.then(aluno => {
      if(!aluno){
        res.status(400).send("Erro usuario não existe ");
      }else{
        res.status(200).send();
      };
    });
  
 
 
})

export { alunosRouter };