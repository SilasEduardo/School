import styled from 'styled-components';

export const Nav = styled.nav`
  .nav {
    display: flex;
    justify-content: space-between;
    font-size:1.5rem;
    color: white;
    font-weight: bold;
    background: #3a30ce;
    align-items: center;
  }

  .logo{
    width: 4rem;
  }
  .addNew{
    margin-right: 4rem;
    text-decoration:none;
    color: white;
    padding: 1rem;
    border-radius:5px;
    background:#635adb;
  }

  .addNew:hover {
    background-color:#b6b3e0!important;
}

`