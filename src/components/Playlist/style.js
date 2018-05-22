import styled from 'styled-components'

const PlaylistStyle = styled.div`
  width: 100%;
  padding: 0 .5rem;
  margin-bottom: 2.5rem;
  
  .info {
    text-align: center;
  }
  
  &.minimized {
    order: 3;
  }
`;

export default PlaylistStyle;
