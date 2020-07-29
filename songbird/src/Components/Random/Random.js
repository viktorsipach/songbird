import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './Random.scss';
import { DEFAULT_IMAGE, DEFAULT_NAME } from '../../constants';

function Random(props) {
    if (props.isAnswer) {
        return (
            <div className="Random">
            <img className="Random__img" alt="bird" src={props.data.image}></img>
            <div className="Random__container">
            <h3 className="Random__name">{props.data.name}</h3>
                <AudioPlayer
                    src={''}
                    autoPlayAfterSrcChange={false}
                    showLoopControl={false}
                    showJumpControls={false}
                    showVolumeControl={true}
                    showDownloadProgress={false}
                />
            </div>
          </div>
        ); 
    }

    return (
        <div className="Random">
        <img className="Random__img" alt="bird" src={DEFAULT_IMAGE}></img>
        <div className="Random__container">
        <h3 className="Random__name">{DEFAULT_NAME}</h3>
            <AudioPlayer 
                src={props.data.audio}
                autoPlayAfterSrcChange={false}
                showLoopControl={false}
                showJumpControls={false}
                showVolumeControl={true}
                showDownloadProgress={false}
            />
        </div>
      </div>
    ); 
   
}

export default Random;