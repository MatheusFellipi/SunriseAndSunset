import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0, #120c56, #000000);
`;

const AnimationStar = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-150px);
    }
`;


export const Stars = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white,
  100px 80px white,
  80px 120px white,
  300px 20px white,
  250px 130px white,
  200px 50px white,
  150px 100px white,
  320px 100px white;
  
  animation: ${AnimationStar} 10s linear infinite;
`;

export const Stars2 = styled.div`
  position: relative;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white, 
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    12px 150px white,
    100px 130px white,
    150px 130px white,
    343px 130px white,
    340px 530px white,
    353px 248px white,
    355px 175px white,
    360px 125px white,
    364px 159px white,
    373px 143px white,
    120px 149px white,
    220px 115px white;
  animation: ${AnimationStar}  20s linear infinite;
  ::after{
    content: " ";
  position: absolute;
  top: 150px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white, 
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    220px 115px white;
  }
`;
