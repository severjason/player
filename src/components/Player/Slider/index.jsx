import React from 'react';
import Sound from 'react-sound';
import PropTypes from "prop-types";
import SliderStyle from './style';
import SliderComponent from './SliderComponent';

const _propTypes = {
	song: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		duration: PropTypes.number,
		src: PropTypes.string,
		artist: PropTypes.string,
		album_cover: PropTypes.string,
	}),
	playingStatus: PropTypes.string,
	songPosition: PropTypes.number,
	minimized: PropTypes.bool,
	onEndSong: PropTypes.func,
	onPlaying: PropTypes.func,
	onSlide: PropTypes.func,
};

const PlayerSlider = (props) => {
	const  { song } = props;
	return (
		<SliderStyle className={props.minimized ? 'minimized' : ''}>
			<Sound
				url={props.song.src}
				playStatus={props.playingStatus}
				position={props.songPosition}
				onFinishedPlaying={props.onEndSong}
				onPlaying={props.onPlaying}
				volume={10}
			/>
			<div className='slider-element album-cover'>
				<div className="song-info-element">
					<img src={song.album_cover} alt={song.title}/>
				</div>
			</div>
			<div className='slider-element'>
				<div className="song-info-element song-title">
					{song.title.toUpperCase()}
				</div>
				<div className="song-info-element">
					<strong>{song.artist}</strong> - {song.album_title}
				</div>
				<SliderComponent
					songPosition={props.songPosition}
					songDuration={props.song.duration}
					onSlide={props.onSlide}
					{...props}
				/>
			</div>
		</SliderStyle>
	)
};

PlayerSlider.propTypes = _propTypes;

export default PlayerSlider;
