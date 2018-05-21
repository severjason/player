import styled from 'styled-components';

const SongStyle = styled.div`
  width: 100%; {
    .song-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      margin: 2px 0;
      padding: .5rem 0;
      border-radius: 2px;
      background-color: ${props => props.mainColor};
      box-shadow: 0 0 10px 1px rgba(0,0,0,0.3);
      
      :hover {
        cursor: pointer;
        background-color: #2c3e50;
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

export default SongStyle;
