import { Alunos } from '../model/Alunos';

const aluno = new Alunos();

interface IAlunos {
  firtName: string,
  age: string,
  grade: Array<number>,
}

class AlunosConttroler {
  private alunos: Alunos[]
  constructor(){
    this.alunos = [];
    
  }


  createAluno({firtName, age, grade}: IAlunos): void{

    Object.assign(aluno, {
      firtName,
      age,
      grade,
      create_at: new Date(),
      stutus: true,
    })

      this.alunos.push(aluno);


   }

   listAlunos(){
    return this.alunos
   }

}


export { AlunosConttroler }