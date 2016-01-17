import Preload from './classes/states/Preload';
import Main from './classes/states/Main';
import GameOver from './classes/states/GameOver';

const init = () => {
	let game = new Phaser.Game(800,500, Phaser.AUTO);
	game.state.add('Main', Main, false);
	game.state.add('GameOver', GameOver, false);
	game.state.add('Preload', Preload, false);
	game.state.start('Preload');
}

init();
