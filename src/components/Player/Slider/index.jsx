// @flow
import * as React from 'react';
import Sound from 'react-sound';
import SliderStyle from './style';
import type { Song } from 'flow/types';
import SliderComponent from './SliderComponent';

type Props = {
  song: Song,
  playingStatus: string,
  songPosition: number,
  minimized: boolean,
  onEndSong: () => void,
  onPlaying: (id: number) => void,
  onSlide: (value: number) => void,
}

const PlayerSlider = (props: Props) => {
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
				volume={50}
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

export default PlayerSlider;
