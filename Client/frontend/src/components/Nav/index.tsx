import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';


function NavBar() {
  return(
    <>
    <Nav>
      <div className='nav'>
        <div><a href="#"><img className='logo' src="/—Pngtree—school logo_6846798.png" alt="logo" /></a></div>
        <div><Link className='addNew' to='/Cadastro'>Novo Aluno</Link></div>
      </div>

    </Nav>
    
    </>
  )
}


export default NavBar;