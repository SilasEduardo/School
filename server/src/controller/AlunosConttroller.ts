import { Alunos } from '../model/Alunos';
import { PrismaClient } from  "@prisma/client"

const prima = new PrismaClient()

const aluno = new Alunos();

interface IAlunos {
  id?: string
  firtName: string,
  age: string,
  grade: Array<number>,
}

class AlunosConttroler {

  async createAluno({firtName, age, grade}: IAlunos){

    Object.assign(aluno, {
      firtName,
      age,
      grade,
      create_at: new Date(),
      stutus: true,
    })
     await prima.alunos.create({data: aluno})
   }

  async listAlunos(){
    const all = await prima.alunos.findMany()
    return all
   }

}


export { AlunosConttroler }