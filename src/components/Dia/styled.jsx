import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0, #f27d00, #ff3c00);
`;

export const Sol = styled.div`
 position:relative;
 background:red;
 border-radius: 50%;
 top:0px;
 width:300px;
 height:300px;
 border:8px solid #ff3c00;
 background-image: -webkit-radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,.6));
 background-image: -moz-radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,.6));
 background-image: -o-radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,.6));
 background-image: -ms-radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,.6));
 background-image: radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,.6));
 ::before{
  background: rgb(255,162,0);
 background-image: -webkit-radial-gradient(circle, rgba(255,0,0,0) 50%, rgba(255,0,0,.8));
 background-image: -moz-radial-gradient(circle, rgba(255,0,0,0) 50%, rgba(255,0,0,.8));
 background-image: -o-radial-gradient(circle, rgba(255,0,0,0) 50%, rgba(255,0,0,.8));
 background-image: -ms-radial-gradient(circle, rgba(255,0,0,0) 50%, rgba(255,0,0,.8));
 background-image: radial-gradient(circle, rgba(255,0,0,0) 50%, rgba(255,0,0,.8));
 content: "";
 border-radius: 50%;
 border:8px solid #ff5100;
 width: 200px;
 height:200px;
 position: absolute;
 top:42px;
 left:42px;
 }
 ::after{
  background:#ffff00;
 background-image: -webkit-radial-gradient(circle, rgba(255,162,0,0) 50%, rgba(255,162,0,.6));
 background-image: -moz-radial-gradient(circle, rgba(255,162,0,0) 50%, rgba(255,162,0,.6));
 background-image: -o-radial-gradient(circle, rgba(255,162,0,0) 50%, rgba(255,162,0,.6));
 background-image: -ms-radial-gradient(circle, rgba(255,162,0,0) 50%, rgba(255,162,0,.6));
 background-image: radial-gradient(circle, rgba(255,162,0,0) 50%, rgba(255,162,0,.6));
 content: "";
 border-radius: 50%;
 border:8px solid #ffb700;
 width: 100px;
 height:100px;
 position: absolute;
 top:92px;
 left:92px;
 }
`;
