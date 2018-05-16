import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.secondaryColor};
  
  .container {
    width: 22rem;
    height: 35rem;
    margin: 0 auto;
    padding: 5px;
    overflow: auto;
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.mainTextColor};    
    border-radius: 3px;
    box-shadow: 0 0 20px 3px rgba(34,47,62,0.66);
  }
  
  @media all and (max-width: 22rem) {
    .container {
      width: 100%;
    }
  }
`;

export default HomeStyle;
