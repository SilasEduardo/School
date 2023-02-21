import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home  from '../pages/ShowAlunos'
import Cadastro  from '../pages/CreateAlunos'


export default function Routers (){

    return(
      <Router>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/Cadastro' element={< Cadastro />}/>
        </Routes>
      </Router>
    )


}


