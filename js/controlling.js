function createPlayer($container){

    const $player = document.createElement("img");
    $player.src = "img/shipy.png";
    $player.className = "player";
    $container.appendChild($player);
}