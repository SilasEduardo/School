import express from 'express';
import { alunosRouter } from './router/alunosRouter';

const app = express();
app.use(express.json());
app.use('/alunos', alunosRouter);


app.listen(3333, ()=> {
  console.log("SERVER ON")
});