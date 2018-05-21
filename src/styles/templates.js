import styled from 'styled-components';

export const flexWidth100 = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  flex-wrap: wrap;
  width: 100%;
`;

export const songStyle = styled.div`
  width: 100%; {
    .song-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      margin: 2px 0;
      padding: .5rem 0;
      border-radius: 2px;
      background-color: ${props => props.theme.mainColor};
      box-shadow: 0 0 10px 1px rgba(0,0,0,0.3);
      
      :hover {
        cursor: pointer;
        background-color: ${props => props.theme.songHoverColor};
      }
      
      .item {
        padding: 0 .5rem;
      }
      
      .small {
        text-align: center;
        font-size: .65rem;
        line-height: 1;
        color: ${props=>props.theme.secondaryTextColor};
      }
    
      .active {
        color: ${props => props.theme.secondaryColor};
      }
    }
  }
`;

export const LoaderStyle = styled.div`
@keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.lds-rolling {
  position: relative;
}
.lds-rolling div,
.lds-rolling div:after {
  position: absolute;
  width: 44px;
  height: 44px;
  border: 4px solid #01a3a4;
  border-top-color: transparent;
  border-radius: 50%;
}
.lds-rolling div {
  -webkit-animation: lds-rolling 1s linear infinite;
  animation: lds-rolling 1s linear infinite;
  top: 50px;
  left: 50px;
}
.lds-rolling div:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.lds-rolling {
  width: 100px !important;
  height: 100px !important;
  -webkit-transform: translate(-50px, -50px) scale(1) translate(50px, 50px);
  transform: translate(-50px, -50px) scale(1) translate(50px, 50px);
}
`;
