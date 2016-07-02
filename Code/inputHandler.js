var InputHandler = function(game) {
    this.game = game;
    this.playerInput;
    
    this.handleInput = function(key) {
        if (key != 13) {
            return;
        }
        this.playerInput = $('.playerInput').val();
        
        if (this.playerInput.length <= 0) {
            return;
        }
        
        this.game.renderer.renderLine(this.game.players[0].name, this.playerInput);
        
        this.playerInput = this.playerInput.split(' ');
    }
    
}