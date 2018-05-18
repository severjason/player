import styled from 'styled-components';

const SliderStyle = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxSongImgWidth};
    margin: 0 auto;
    
    &.minimized {
      order: 2;
    }
`;

export default SliderStyle;