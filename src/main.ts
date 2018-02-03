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

    preload() {
        
    }

    create() {
        
    }

    update() {
        
    }

    render() {
        
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
