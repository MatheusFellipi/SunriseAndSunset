import styled from 'styled-components'

export const Predio = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  background-color: ${props => props.theme.colors.predios_primarios};
  margin: 0 1rem 0 33rem;
  width: 25vw;
  height:80vh;
  position: absolute;
  bottom: 0px;
  background-repeat: repeat-x;
  z-index:5;

`;


export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 20em;
`;

export const Button = styled.button`
  width:10rem;
  height:2rem;
  top:0;
  right:0;
  font-weight:bold;
  color:white;
  background-color:#cbcae2;
  border-radius:10rem;
  position: absolute;
  outline: none;
  border:none;
`;
