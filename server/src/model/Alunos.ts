
import {v4 as uuidv4} from 'uuid';

class Alunos {

  id: string
  firtName!: string;
  lastName!: string;
  age!: string;
  grades!: Array<number>;
  create_at!: Date;
  stutus!: boolean;

  constructor(){
      this.id = uuidv4()
  }
 
  
  
}


export { Alunos }