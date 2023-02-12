import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay({seconds}) {
    localStorage.setItem(TIME, seconds);
};

setCurrentTime();

function setCurrentTime() {
    if (!localStorage.getItem(TIME)) {
        return;
    };
    player.setCurrentTime(localStorage.getItem(TIME));
};
