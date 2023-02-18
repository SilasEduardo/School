import { Router } from 'express';

const alunosRouter = Router();

alunosRouter.get('/', (req, res) => {
  res.send('hello world')
})





export { alunosRouter };