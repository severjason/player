import styled from 'styled-components';

const SliderComponentStyle = styled.div`
		width: 100%;
    padding: 5px 0;   
    .slider {
      margin: 1rem 0;
      .rangeslider {
        display: block;
        position: relative;
        margin: 0;
        box-shadow: inset 0 1px 3px rgba(0,0,0,.4);
        
       &:hover {
        cursor: pointer;
       }
      }
      .rangeslider-horizontal {
        height: 2px;
        border-radius: 1px;
        background: ${props=>props.theme.secondaryTextColor};
        
        .rangeslider__handle {
          display: none;
          position: absolute;
          width: 2px;
          height: 16px;
          border-radius: 1px;
          top: 50%;
          transform: translate3d(-50%,-50%,0);
          background: ${props=>props.theme.mainTextColor};
          border: 1px solid #ccc;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,.4), 0 -1px 3px rgba(0,0,0,.4);
          
          &:after {
            display: none;
          }
          .rangeslider__handle-tooltip {
            display: none;
          }
        }
        
        & .rangeslider__fill {
          height: 100%;
          background-color: ${props=>props.theme.secondaryColor};
          border-radius: 1px;
          top: 0;
        }
      }
    }
    .labels {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      font-size: .65rem;
      color: ${props=>props.theme.secondaryTextColor};
    }
`;

export default SliderComponentStyle;