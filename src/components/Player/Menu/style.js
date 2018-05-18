import { flexWidth100 } from 'styles'

const MenuStyle = flexWidth100.extend`
  height: 2rem;
  line-height: 2rem;
  padding: .5rem;
  
  a, .menu-item {
    font-size: 1.5rem;
    display: block;
    
    &:hover, &.active {
      cursor: pointer;
      color: ${props => props.theme.secondaryColor};
    }
  }
`;

export default MenuStyle;
