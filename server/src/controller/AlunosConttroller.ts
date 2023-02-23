import { Alunos } from '../model/Alunos';
import { PrismaClient } from  "@prisma/client";

const prima = new PrismaClient();
const aluno = new Alunos();

interface IAlunos {
  firtName: string,
  email: string,
  age: string,
  grade: Array<number>,
  status: boolean,
};

interface IAlunosUpDate {
  id: number,
  firtName: string,
  email: string,
  age: string,
  grade: Array<number>,
  status: boolean,
};

class AlunosConttroler {
//=====================| CRIANDO ALUNOS |=========================//
  async createAluno({firtName, age, grade, email, status}: IAlunos){


    const alunosExists = await prima.alunos.findMany({where: {email}});

    if(alunosExists.length > 0){
      return false;
    }

    Object.assign(aluno, {
      firtName,
      email,
      age,
      grade,
      create_at: new Date(),
      status,
    });
     await prima.alunos.create({data: aluno});
     return true;
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

   async updateAlunos({firtName, email, age, grade, id, status}: IAlunosUpDate){

    try{
      
      if(!id)return false;
      const alunosNotExists = await prima.alunos.findUnique({where: { id }});
      if(!alunosNotExists)return false;
  
      Object.assign(aluno, {
        firtName,
        email,
        age,
        grade,
        create_at: new Date(),
        status,
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