import React from 'react';
import { Nav } from './styled';


function NavBar() {
  return(
    <>
    <Nav>
      <div className='nav'>
        <div><a href="#"><img className='logo' src="/—Pngtree—school logo_6846798.png" alt="logo" /></a></div>
        <div><a className='addNew' href="#">Novo Aluno</a></div>
      </div>

    </Nav>
    
    </>
  )
}


export default NavBar;