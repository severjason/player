import { flexWidth100 } from 'styles'

const SongStyle = flexWidth100.extend`
  flex-wrap: wrap;
  .song-info-element {
    width: 100%;
    padding: .5rem .5rem 0 .5rem;
    color: ${props => props.theme.secondaryTextColor};
    font-size: .7rem;
    text-align: center;
    
    img {
      display: block;
      max-height: ${props => props.theme.maxWidth};
      margin: 0 auto;
      border-radius: 3px;
      box-shadow: 0 0 20px 3px rgba(0,0,0,0.66);
    }
  }
  .song-title {
      padding-top: 1rem;
      color: ${props => props.theme.mainTextColor};
      font-weight: bold;
      font-size: 1.1rem;
    }
`;

export default SongStyle;
