import React from 'react';
import Sound from 'react-sound';
import PropTypes from "prop-types";
import SliderStyle from './style';
import SliderComponent from './SliderComponent';

const _propTypes = {
	song: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    album: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover_big:PropTypes.string.isRequired,
    }),
	}),
	playingStatus: PropTypes.string.isRequired,
	songPosition: PropTypes.number.isRequired,
	minimized: PropTypes.bool,
	onEndSong: PropTypes.func.isRequired,
	onPlaying: PropTypes.func.isRequired,
	onSlide: PropTypes.func.isRequired,
};

const PlayerSlider = (props) => {
	const  {
		song,
		minimized,
    playingStatus,
    songPosition,
    onEndSong,
    onPlaying,
    onSlide,
	} = props;
	return (
		<SliderStyle className={minimized ? 'minimized' : ''}>
			<Sound
				url={song.preview}
				playStatus={playingStatus}
				position={songPosition}
				onFinishedPlaying={onEndSong}
				onPlaying={onPlaying}
				volume={10}
			/>
			<div className='slider-element album-cover'>
				<div className="song-info-element">
					<img src={song.album.cover_big} alt={song.title}/>
				</div>
			</div>
			<div className='slider-element'>
				<div className="song-info-element song-title">
					{song.title.toUpperCase()}
				</div>
				<div className="song-info-element">
					<strong>{song.artist.name}</strong> - {song.album.title}
				</div>
				<SliderComponent
					songPosition={songPosition}
					songDuration={song.duration}
					onSlide={onSlide}
					{...props}
				/>
			</div>
		</SliderStyle>
	)
};

PlayerSlider.propTypes = _propTypes;

export default PlayerSlider;
