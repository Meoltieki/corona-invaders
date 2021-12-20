const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;
const KEY_CODE_UP = 38;
const KEY_CODE_DOWN = 40;




const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 5;



const GAME_STATE = {

    playerX: 0,
    playerY: 0,

}




function createPlayer($container){

    GAME_STATE.playerX = GAME_WIDTH /2;
    GAME_STATE.playerY = GAME_HEIGHT -50;

    const $player = document.createElement("img");
    $player.src = "img/shipy.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);

    
}

function init() {

    const $container = document.querySelector(".game");
    createPlayer($container);

}


init ();

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);