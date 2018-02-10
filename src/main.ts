// Include Game Framework
// import "pixi";
// import "p2";
// import "phaser-ce";

// Include game components
import { Player } from './player';

// Game class
class SimpleGame {
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { 
            preload: this.preload, 
            create: this.create,
            update: this.update,
            render: this.render 
        });
    }

    game: Phaser.Game;
    player: Player;

    private preload() : void {
        
    }

    private create() : void {
        this.player = new Player(); 

        var color = Phaser.Color.getRandomColor(50, 255, 255);
        this.game.stage.backgroundColor = color;
    }

    private update() : void {
        
    }

    private render() : void {
        
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
