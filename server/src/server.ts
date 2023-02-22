import express from 'express';
import cors from 'cors'
import { alunosRouter } from './router/alunosRouter';

const app = express();
app.use(cors())
app.use(express.json());
app.use('/alunos', alunosRouter);



app.listen(3333, ()=> {
  console.log("SERVER ON")
});