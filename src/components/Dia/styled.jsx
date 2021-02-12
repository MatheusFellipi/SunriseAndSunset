import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0, #00daf2, #3F688C);
`;

export const Img = styled.img`
  width:10rem;
  height:10rem;
  position:absolute;
  margin-top:10rem;
  margin-left:10rem;

`;
export const Img2 = styled.img`
  width:10rem;
  height:10rem;
  position:absolute;
  margin-top:10rem;
  margin-left:62rem;
`;

export const Sol = styled.div`
 position:relative;
 background:#ffffff;
 border-radius: 50%;
 top:0px;
 width:150px;
 height:150px;
 border:8px solid #ffffff;
 background-image: -webkit-radial-gradient(circle, #ffffff 50%, rgba(0,0,0,.2));
 background-image: -moz-radial-gradient(circle, #ffffff 50%, rgba(0,0,0,.2));
 background-image: -o-radial-gradient(circle, #ffffff 50%, rgba(0,0,0,.2));
 background-image: -ms-radial-gradient(circle, #ffffff 50%, rgba(0,0,0,.2));
 background-image: radial-gradient(circle, #ffffff 50%, rgba(0,0,0,.2));
 box-shadow: 0px -1px 20px white;


 ::before{
  background: #ffffff;
 background-image: -webkit-radial-gradient(circle,#ffffff 50%, #ffffff);
 background-image: -moz-radial-gradient(circle,#ffffff 50%, #ffffff);
 background-image: -o-radial-gradient(circle,#ffffff 50%, #ffffff);
 background-image: -ms-radial-gradient(circle,#ffffff 50%, #ffffff);
 background-image: radial-gradient(circle,#ffffff 50%, #ffffff);
 content: "";
 border-radius: 50%;
 border:8px solid #ffffff;
 width: 50px;
 height:50px;
 position: absolute;
 top:42px;
 left:42px;
 }
 
`;
