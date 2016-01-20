import Preload from './classes/states/Preload';
import Main from './classes/states/Main';
import Menu from './classes/states/Menu';
import TryOut from './classes/states/TryOut';
import GameOver from './classes/states/GameOver';

const init = () => {
	let game = new Phaser.Game(800,500, Phaser.AUTO);
	game.state.add('Main', Main, false);
	game.state.add('GameOver', GameOver, false);
	game.state.add('Menu', Menu, false);
	game.state.add('TryOut', TryOut, false);
	game.state.add('Preload', Preload, false);
	game.state.start('Preload');
}

init();
