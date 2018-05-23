import { flexWidth100 } from 'styles';

const SliderStyle = flexWidth100.extend`
    width: 100%;
    max-width: ${props => props.theme.maxSongImgWidth};
    margin: 0 auto;
    
    .slider-element {
      	width: 100%;
      	transition: width ${props => props.theme.baseTransition};
     }
    
    .song-info-element {
			width: 100%;
			padding: 0;
			color: ${props => props.theme.secondaryTextColor};
			font-size: .7rem;
			text-align: center;
    
			img {
				display: block;
				max-height: ${props => props.theme.maxSongImgWidth};
				margin: 0 auto;
				border-radius: 3px;
				box-shadow: 0 0 20px 3px rgba(0,0,0,0.66);
			}
  	}
		.song-title {
				padding-top: .5rem;
				color: ${props => props.theme.mainTextColor};
				font-weight: bold;
				font-size: 1.1rem;
				word-wrap: break-word;
		}
		
		&.minimized {
      order: 2;
      flex-wrap: nowrap;
      align-content: center;
      margin: 2px;
      .slider-element {
      	display: flex;
      	flex-wrap: wrap;
      	width: 75%;
      	padding: 0 5px;
      	align-items: center;
      	
      	transition: width ${props => props.theme.baseTransition};
      	
      	&.album-cover {
      		width: 25%;
      		transition: width ${props => props.theme.baseTransition};
      	}
      }
      .song-info-element {
      	font-size: .6rem;
      	line-height: .6rem;
      	padding: 2px;
      }
      .slider {
      	margin: .5rem 0;
      	width: 100%;
      }
      .song-title {
				padding-top: 0;
				font-weight: bold;
				font-size: .8rem;
				line-height: .8rem;
				word-wrap: break-word;
			}
    }

`;

export default SliderStyle;