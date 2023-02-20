import { Alunos } from '../model/Alunos';
import { PrismaClient } from  "@prisma/client"

const prima = new PrismaClient()
const aluno = new Alunos();

interface IAlunos {
  firtName: string,
  age: string,
  grade: Array<number>,
}

interface IAlunosUpDate {
  id: number,
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

   async updateAlunos({firtName, age, grade, id}: IAlunosUpDate){

    const alunosNotExists = await prima.alunos.findUnique({where: { id }})

    if(!alunosNotExists){
      throw new Error("Aluno não existe")
    } 

    Object.assign(aluno, {
      firtName,
      age,
      grade,
      create_at: new Date(),
      stutus: true,
    });

    await prima.alunos.update({
      where: {
        id,
      },
      data: aluno
    })

   }
// =========================| DELETAR ALUNO |======================//

  async deleteAlunos(id: any){

    try{

        if(!id || id === 'string'){
         return false
        } 

        const alunosNotExists = await prima.alunos.findUnique({where: {id}})


        if(!alunosNotExists){
          return false
        } 
        await prima.alunos.delete({where: {id}});
        return true
    }catch(e){
      console.log(e)
      return false
    }
  }

}


export { AlunosConttroler }