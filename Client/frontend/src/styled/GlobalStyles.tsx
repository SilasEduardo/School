import styled, { createGlobalStyle } from 'styled-components'; 


export default createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }
`
export const Container = styled.section`
  margin-top: 10rem;
  margin-left: 10rem;
  max-width: 60rem;
  max-height: 60rem;
  background: #3a30ce;
  text-align: center;
  padding: 30px;
  border: solid 1px #3a30ce;
`