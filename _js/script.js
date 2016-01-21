import Preload from './classes/states/Preload';
import Main from './classes/states/Main';
import Menu from './classes/states/Menu';
import TryOut from './classes/states/TryOut';
import GameOver from './classes/states/GameOver';

const init = () => {
	let game_wrapper = document.querySelector('.game-wrapper');
	let game = new Phaser.Game(850,550, Phaser.AUTO, game_wrapper);
	game.state.add('Main', Main, false);
	game.state.add('GameOver', GameOver, false);
	game.state.add('Menu', Menu, false);
	game.state.add('TryOut', TryOut, false);
	game.state.add('Preload', Preload, false);
	game.state.start('Preload');

	document.querySelector('.cant-win').addEventListener('click', e => {
		e.target.parentNode.querySelector('article').classList.toggle('hidden');
	})

	document.addEventListener('mousemove', e => {
		parallaxImages(e.x, e.y);
	})
}

const parallaxImages = (x,y) => {
	let images = document.querySelector('#parallax');
	console.log();
}

init();
