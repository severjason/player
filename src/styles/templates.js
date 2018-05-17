import styled from 'styled-components';

export const flexWidth100 = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  flex-wrap: wrap;
  width: 100%;
`;