import './AudioPlayer.scss';

const playAudio = (audioLink:string) => {
    const audio = new Audio(audioLink);
    audio.play()
};

export default  playAudio;