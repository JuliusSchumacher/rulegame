function Game(size, charOffset) {
    this.size = size;
    this.charOffset = charOffset;

    this.players = [];

    this.map = new Map(this.size);
    this.inputHandler = new InputHandler(this);
    this.renderer = new Renderer();
    this.commandHandler = new CommandHandler(this);

    this.render = function() {
        this.renderer.map = this.map;
        this.renderer.players = this.players;

        this.renderer.clearConsole();
        this.renderer.renderMap(this.charOffset);
        this.renderer.renderPlayers();
    }
    
    this.start = function() {
        this.renderer.renderLine('<< Game', 'Rulegame [Alpha]');
        this.renderer.renderLine('<< Game', '(c) 2016 Julius Schumacher. All rights reserved.');
        this.renderer.renderLine('<< Game', 'Type HELP for a help playing this game.');
    }
}

var game;

function init() {
    game = new Game(44, 33);
    game.players.push(new Player('Julius', [5, 6], 35234));
    game.render();
    game.start();
    
    $(document).keydown(function(e) {
        game.inputHandler.handleInput(e.which);
    });
}