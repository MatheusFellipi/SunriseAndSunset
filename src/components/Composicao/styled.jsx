import styled from 'styled-components'

export const Predio = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  position: absolute;
  margin:0 0 0 16rem;
  background-color: ${props => props.theme.colors.predios_primarios};
  width: 20vw;
  height:50vh;
  position: absolute;
  bottom: 0px;
  background-repeat: repeat-x;
  z-index:2;

  ::after{
    content:'';
  position: absolute;

    margin:-28rem 7rem 0 0;
    border-right: 7rem solid transparent;
    border-bottom: 3rem solid ${props => props.theme.colors.predios_primarios};
  }
  ::before{
    content:'';
  position: absolute;

    margin:-22rem 8rem 0 0;
    border-right: 5rem solid ${props => props.theme.colors.predios_primarios};
    border-left: 1rem solid ${props => props.theme.colors.predios_primarios};
    border-top: 2rem solid ${props => props.theme.colors.predios_primarios};
    border-bottom: 1rem solid ${props => props.theme.colors.predios_primarios};

  }
`;
export const Predio02 = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  position: absolute;
  margin:0 0 0 53rem;
  background-color: ${props => props.theme.colors.predios_primarios};
  width: 20vw;
  height:20vh;
  position: absolute;
  bottom: 0px;
  background-repeat: repeat-x;
  z-index:2;

  ::after{
    content:'';
  position: absolute;

    margin:-14rem 2rem 0 0;
    border-right: 10rem solid transparent;
    border-left: 10rem solid transparent;
    border-bottom: 6rem solid ${props => props.theme.colors.predios_primarios};
  }
 
`;
export const Predio03 = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  position: absolute;
  margin:0 -6rem 8rem 17rem;
  background-color: ${props => props.theme.colors.predios_secundarios};
  width: 20vw;
  height:50vh;
  position: absolute;
  bottom: 0px;
  background-repeat: repeat-y;
  z-index:1;
  ::after{
    content:'';
    position: absolute;
    margin:-22rem 1rem 0 0;
    border-right: 10rem solid  ${props => props.theme.colors.predios_secundarios};
    border-left: 5rem solid  ${props => props.theme.colors.predios_secundarios};
    border-top: 5rem solid  ${props => props.theme.colors.predios_secundarios};
    border-bottom: 2rem solid  ${props => props.theme.colors.predios_secundarios};
  
  }
  ::before{
    content:'';
    position: absolute;
    margin:-30rem 1rem 0 0;
    border-right: 2rem solid  ${props => props.theme.colors.predios_secundarios};
    border-left: 2rem solid  ${props => props.theme.colors.predios_secundarios};
    border-top: 5rem solid  ${props => props.theme.colors.predios_secundarios};
    border-bottom: 5rem solid  ${props => props.theme.colors.predios_secundarios};
  }
 
 
 
`;
export const Predio04 = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  position: absolute;
  margin:0 0 5rem 53rem;
  background-color:  ${props => props.theme.colors.predios_secundarios};
  width: 20vw;
  height:50vh;
  position: absolute;
  bottom: 0px;
  background-repeat: repeat-y;
  z-index:1;
  ::after{
    content:'';
  position: absolute;

    margin:-25.8rem 1rem 0 0;
    border-right: 18rem solid transparent;
    border-bottom: 5rem solid  ${props => props.theme.colors.predios_secundarios};
  }
 
`;


export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 20em;
`;

export const Janelas01 = styled.div`
  position: relative;
  width: 61px;
  height: 100px;
  margin: 10px;
  background-color:${({ isActive01 }) => isActive01 ? '#fbff00' : '#446677'};
  ::before{
    content:" ";
  position: absolute;
  width: 61px;
  height: 5px;
  margin-top: -1px;
  background:linear-gradient(0, #141e22, #0f1315);
  }
::after{
  content:" ";
  position: absolute;
  width: 64px;
    height: 15px;
    margin: 86px 0 0 -2px;
  background:linear-gradient(0, #141e22, #0f1315);
  
}
  
`;
export const Janelas02 = styled.div`
  position: relative;
  width: 61px;
  height: 100px;
  margin: 10px;
  margin-top:1rem;

  background-color:${({ isActive02 }) => isActive02 ? '#fbff00' : '#446677'};
  ::before{
    content:" ";
  position: absolute;
  width: 61px;
  height: 5px;
  margin-top: -1px;
  background:linear-gradient(0, #141e22, #0f1315);
  }
::after{
  content:" ";
  position: absolute;
  width: 64px;
  height: 15px;
  margin: 86px 0 0 -2px;
  background:linear-gradient(0, #141e22, #0f1315);
  
}
`;
export const Janelas04 = styled.div`
  position: relative;
  width: 61px;
  height: 100px;
  margin: 10px;
  margin-top:1rem;

  background-color:${({ isActive04 }) => isActive04 ? '#fbff00' : '#446677'};
  ::before{
    content:" ";
  position: absolute;
  width: 61px;
  height: 5px;
  margin-top: -1px;
  background:linear-gradient(0, #141e22, #0f1315);
  }
::after{
  content:" ";
  position: absolute;
  width: 64px;
  height: 15px;
  margin: 86px 0 0 -2px;
  background:linear-gradient(0, #141e22, #0f1315);
  
}
  
`;
export const Janelas03 = styled.div`
  position: relative;
  width: 61px;
  height: 100px;
  margin: 10px;
  margin-top:1rem;

  background-color:${({ isActive03 }) => isActive03 ? '#fbff00' : '#446677'};
  ::before{
    content:" ";
  position: absolute;
  width: 61px;
  height: 5px;
  margin-top: -1px;
  background:linear-gradient(0, #141e22, #0f1315);
  }
::after{
  content:" ";
  position: absolute;
  width: 64px;
  height: 15px;
  margin: 86px 0 0 -2px;
  background:linear-gradient(0, #141e22, #0f1315);
  
}
  
`;

export const Janelas05 = styled.div`
  position: absolute;
  width: 61px;
  height: 61px;
  margin: -10rem 0 0 -2rem;
  border-radius: 10rem;
  background-color:${({ isActive05 }) => isActive05 ? '#fbff00' : '#446677'};
  z-index:5;
  ::before{
    content:" ";
  position: absolute;
  width: 61px;
  height: 5px;
  margin-top: 28px;
  background:linear-gradient(0, #141e22, #0f1315);
  }
::after{
  content:" ";
  position: absolute;
  width: 61px;
  height: 5px;
  margin-top: 28px;
  background:linear-gradient(0, #141e22, #0f1315);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg); 

}
  
`;