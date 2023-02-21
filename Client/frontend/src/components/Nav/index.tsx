import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';


function NavBar() {
  return(
    
    <>
    <Nav>
      <div className='nav'>
        <div><Link to='/'><img className='logo' src="/—Pngtree—school logo_6846798.png" alt="logo" /></Link></div>
        <div>{ window.location.pathname === "/Cadastro" ? <Link className='addNew' to='/'>Lista de Alunos</Link>:
        <Link className='addNew' to='/Cadastro'>Novo Aluno</Link>  }</div>
      </div>

    </Nav>
    
    </>
  )
}


export default NavBar;