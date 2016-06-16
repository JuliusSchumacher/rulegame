function Game(size, charOffset) {
    this.size = size;
    this.charOffset = charOffset;
    
    this.players = [];
    
    this.map = new Map(this.size);
    this.renderer = new Renderer();
    
    this.render = function() {
        this.renderer.map = this.map;
        this.renderer.players = this.players;
        
        this.renderer.renderMap(this.charOffset);
        this.renderer.renderPlayers();
    }
}

$(document).ready(function() {
    var game = new Game(44, 33);
    game.players.push(new Player('Julius', [5, 6], 45454));
    game.render();
});