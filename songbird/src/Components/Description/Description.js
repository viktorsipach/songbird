import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './Description.scss';

function Description(props) {
    if(props.info) {
        return (
            <div className="Info">
            <img className="Info__img" src={props.info.image} alt="bird"></img>
            <div>
            <h2 className="Info__name">{props.info.name}</h2>
            <h3 className="Info__species">{props.info.species}</h3>
            <AudioPlayer 
                src={props.info.audio}
                autoPlayAfterSrcChange={false}
                showLoopControl={false}
                showJumpControls={false}
                showVolumeControl={true}
                showDownloadProgress={false}
            />
            </div>
            <p className="Info__description">{props.info.description}</p>
            </div>
          );
    } 
    return (
        <div className="Start-info">
            <h3>Послушайте плеер.</h3>
            <p>Выберите птицу из списка.</p>
        </div>
    );
}

export default Description;