import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './Random.scss';
import './AudioPlayer.scss';

function Random(props) {
    let srcDefault = "https://i2.wp.com/pro-kletochki.ru/wp-content/uploads/2018/01/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5%D0%BB%D0%B0%D1%8F-%D1%80%D0%B0%D1%81%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%9B%D0%94-%D0%A1%D0%BE%D0%B2%D0%B0.gif?w=365&h=433&ssl=1"
    let nameDefault = '*******';
    return (
        <div className="Random">
        <img className="Random__img" alt="bird" src={srcDefault}></img>
        <div className="Random__container">
        <h3 className="Random__name">{nameDefault}</h3>
            <AudioPlayer 
                src=''
                autoPlayAfterSrcChange={false}
                showLoopControl={false}
                showJumpControls={false}
                showVolumeControl={false}
                showDownloadProgress={false}
            />
        </div>
      </div>
    ); 
}

export default Random;