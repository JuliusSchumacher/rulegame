var CommandHandler = function(game) {
    this.game = game;
    
    this.handleCommand = function(params) {
        switch(params[0]) {
            case 'CLEAR':
                this.clear();
                break;
            case 'HELP':
                this.help(params[1]);
                break;
            default:
                this.game.renderer.renderLine('<< Game', params[0] + ' is not a valid command.');
        }
    }
    
    this.clear = function() {
        this.game.renderer.clearPlayerConsole();
    }
    
    this.help = function(query) {
        if (query != undefined) {
            switch (query) {
                case 'CLEAR':
                    this.game.renderer.renderLine('<< Help', 'CLEAR');
                    this.game.renderer.renderLine('<< Help', 'Clears the console.');
                    this.game.renderer.renderLine('<< Help', 'CLEAR');
                    break;
                case 'HELP': 
                    this.game.renderer.renderLine('<< Help', 'HELP');
                    this.game.renderer.renderLine('<< Help', 'Provides information on the commands in Rulegame.');
                    this.game.renderer.renderLine('<< Help', 'HELP [command]');
                    this.game.renderer.renderLine('<< Help', 'command ---- displays information on that specific command.');
                    break;
                default:
                    this.game.renderer.renderLine('<< Help', query + ' is not a valid command.');
            }
            return;
        }
        this.game.renderer.renderLine('<< Help', 'For more information on a specific command, type HELP command-name.');
        
        this.game.renderer.renderLine('<< Help', 'CLEAR ---- Clears the console.');
        this.game.renderer.renderLine('<< Help', 'HELP ---- Provides Help information for Rulegame commands.');
        
    }
    
}