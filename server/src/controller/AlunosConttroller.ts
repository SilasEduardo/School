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
//=====================| CRIANDO ALUNOS |=========================//
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


// ======================| LISTANDO TODOS OS ALUNOS |===================//
  async listAlunos(){
    const all = await prima.alunos.findMany()
    return all
   }


// =========================| ATUALIZANDO ALUNO |======================//

   async updateAlunos({firtName, age, grade, id}: IAlunos){

    Object.assign(aluno, {
      firtName,
      age,
      grade,
      create_at: new Date(),
      stutus: true,
    });

    const alunos = await prima.alunos.update({
      where: {
        id,
      },
      data: aluno
    })

    console.log(alunos)
   }


}


export { AlunosConttroler }