import { Alunos } from '../model/Alunos';
import { PrismaClient } from  "@prisma/client";

const prima = new PrismaClient();
const aluno = new Alunos();

interface IAlunos {
  firtName: string,
  age: string,
  grade: Array<number>,
};

interface IAlunosUpDate {
  id: number,
  firtName: string,
  age: string,
  grade: Array<number>,
};

class AlunosConttroler {
//=====================| CRIANDO ALUNOS |=========================//
  async createAluno({firtName, age, grade}: IAlunos){

    Object.assign(aluno, {
      firtName,
      age,
      grade,
      create_at: new Date(),
      stutus: true,
    });
     await prima.alunos.create({data: aluno});
   };


// ======================| LISTANDO TODOS OS ALUNOS |===================//
  async listAlunos(){
    const all = await prima.alunos.findMany({
      orderBy: {
        id: 'desc'
      }
    });
    return all
   };


// =========================| ATUALIZANDO ALUNO |======================//

   async updateAlunos({firtName, age, grade, id}: IAlunosUpDate){

    try{
      
      if(!id)return false;
      const alunosNotExists = await prima.alunos.findUnique({where: { id }});
      if(!alunosNotExists)return false;
  
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
      });
      return true;
    }catch(e){
      return false;
    };
   }
// =========================| DELETAR ALUNO |======================//

  async deleteAlunos(id: any){

    try{
        if(!id || id === 'string')return false; 

        const alunosNotExists = await prima.alunos.findUnique({where: {id}});


        if(!alunosNotExists)return false;
        await prima.alunos.delete({where: {id}});
        return true
    }catch(e){
      return false;
    };
  };
};


export { AlunosConttroler };