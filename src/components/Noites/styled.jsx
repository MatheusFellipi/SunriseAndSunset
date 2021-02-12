import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(77,39,115);
  background: -moz-linear-gradient(0deg, rgba(77,39,115,1) 10%, rgba(41,28,89,1) 37%, rgba(41,28,89,1) 61%, rgba(15,14,38,1) 79%);
  background: -webkit-linear-gradient(0deg, rgba(77,39,115,1) 10%, rgba(41,28,89,1) 37%, rgba(41,28,89,1) 61%, rgba(15,14,38,1) 79%);
  background: linear-gradient(0deg, rgba(77,39,115,1) 10%, rgba(41,28,89,1) 37%, rgba(41,28,89,1) 61%, rgba(15,14,38,1) 79%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4d2773",endColorstr="#0f0e26",GradientType=1);`;

const AnimationStar = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-150px);
    }
`;
export const Lua = styled.div`
 position:relative;
 background:#fff;
 border-radius: 50%;
 top:0px;
 width:150px;
 height:150px;
 border:8px solid transparent;
 background-image: -webkit-radial-gradient(circle, #f5f5f5 50%, rgba(0,0,0,.6));
 background-image: -moz-radial-gradient(circle, #f5f5f5 50%, rgba(0,0,0,.6));
 background-image: -o-radial-gradient(circle, #f5f5f5 50%, rgba(0,0,0,.6));
 background-image: -ms-radial-gradient(circle, #f5f5f5 50%, rgba(0,0,0,.6));
 background-image: radial-gradient(circle, #f5f5f5 50%, rgba(0,0,0,.6));
 box-shadow: 0px -1px 20px white;
 ::before{
  background: #c4afda;
 background-image: -webkit-radial-gradient(circle,#f5f5f5 50%, #f5f5f5);
 background-image: -moz-radial-gradient(circle,#f5f5f5 50%, #f5f5f5);
 background-image: -o-radial-gradient(circle,#f5f5f5 50%, #f5f5f5);
 background-image: -ms-radial-gradient(circle,#f5f5f5 50%, #f5f5f5);
 background-image: radial-gradient(circle,#f5f5f5 50%, #f5f5f5);
 content: "";
 border-radius: 50%;
 border:8px solid #f5f5f5;
 width: 50px;
 height:50px;
 position: absolute;
 top:42px;
 left:42px;
 }
 
`;

export const Stars = styled.div`
  margin:0 0 0 0;
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
  320px 100px white,
  350px 120px white,
  310px 120px white,
  320px 120px white,
  115px 110px white,
  220px 115px white,
  525px 120px white,
  130px 125px white,
  235px 135px white,
  340px 155px white,
  265px 144px white,
  395px 145px white,
  180px 160px white;
  
  animation: ${AnimationStar} 10s linear infinite;
`;

export const Stars01 = styled.div`
  margin:108px 0 0 665px;
  width: 3px;
  height: 3px;
  position:absolute;
  border-radius: 50%;
  box-shadow: 50px 30px white,
  100px 80px white,
  80px 120px white,
  300px 20px white,
  250px 130px white,
  200px 50px white,
  150px 100px white,
  320px 100px white,
  350px 120px white,
  310px 120px white,
  320px 120px white,
  115px 110px white,
  220px 115px white,
  525px 120px white,
  130px 125px white,
  235px 135px white,
  340px 155px white,
  265px 144px white,
  395px 145px white,
  180px 160px white;
  
  animation: ${AnimationStar} 10s linear infinite;
`;

export const Stars02 = styled.div`
  margin:190px 43px 41px 680px;
  width: 3px;
  position:absolute;
  height: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white,
  100px 80px white,
  80px 120px white,
  300px 20px white,
  250px 130px white,
  200px 50px white,
  150px 100px white,
  320px 100px white,
  350px 120px white,
  310px 120px white,
  320px 120px white,
  115px 110px white,
  220px 115px white,
  525px 120px white,
  130px 125px white,
  235px 135px white,
  340px 155px white,
  265px 144px white,
  395px 145px white,
  180px 160px white;
  
  animation: ${AnimationStar} 10s linear infinite;
`;

export const Stars03 = styled.div`
  margin:78px 0 22px 196px;
  position:absolute;
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
  320px 100px white,
  350px 120px white,
  310px 120px white,
  320px 120px white,
  115px 110px white,
  220px 115px white,
  525px 120px white,
  130px 125px white,
  235px 135px white,
  340px 155px white,
  265px 144px white,
  395px 145px white,
  180px 160px white;
  
  animation: ${AnimationStar} 10s linear infinite;
`;
export const Stars04 = styled.div`
  margin:78px 0 22px 196px;
  position:absolute;
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
  320px 100px white,
  350px 120px white,
  310px 120px white,
  320px 120px white,
  115px 110px white,
  220px 115px white,
  525px 120px white,
  130px 125px white,
  235px 135px white,
  340px 155px white,
  265px 144px white,
  395px 145px white,
  180px 160px white;
  
  animation: ${AnimationStar} 10s linear infinite;
`;
export const Stars05 = styled.div`
  margin:194px 0 22px 864px;
  position:absolute;
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
  320px 100px white,
  350px 120px white,
  310px 120px white,
  320px 120px white,
  115px 110px white,
  220px 115px white,
  525px 120px white,
  130px 125px white,
  235px 135px white,
  340px 155px white,
  265px 144px white,
  395px 145px white,
  180px 160px white;
  
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
export const Stars201 = styled.div`
  position: absolute;
  margin: 165px 0 0 10px;
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
export const Stars203 = styled.div`
  position: relative;
  margin: 196px 0 48px 947px;

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
