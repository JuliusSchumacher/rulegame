var CommandHandler = function(game) {
    this.game = game;
    
    this.handleCommand = function(params) {
        switch(params[0]) {
                
            case 'CHANGE':
                this.change(params[1], params[2], params[3]);
                break;
                
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
    
    this.change = function(target, attr, nw) {
        switch(target) {
                
            case 'PLAYER':
                switch(attr) {
                        
                    case 'NAME':
                        this.game.players[0].name = nw;
                        this.game.render();
                        break;
                        
                    case 'COLOR':
                        this.game.players[0].color = nw;
                        this.game.render();
                        break;
                        
                    case 'ICON':
                        this.game.players[0].icon = String.fromCharCode(nw);
                        this.game.render();
                        break;
                        
                    default:
                        this.game.renderer.renderLine('<< Change', attr + ' is not a valid attribute.');
                }
                break;
                
            case 'TILE':
                this.game.renderer.renderLine('<< Change', 'TILE is currently under construction.');
                break;
                
            default:
                this.game.renderer.renderLine('<< Change', target + ' is not a valid target.');
        }
    }
    
    this.clear = function() {
        this.game.renderer.clearPlayerConsole();
    }
    
    this.help = function(query) {
        if (query != undefined) {
            switch (query) {
                    
                case 'CHANGE':
                    this.game.renderer.renderLine('<< Help', 'CHANGE');
                    this.game.renderer.renderLine('<< Help', 'Changes an attribute.');
                    this.game.renderer.renderLine('<< Help', 'CHANGE [target] [attribute] [new]');
                    this.game.renderer.renderLine('<< Help', 'target ---- [PLAYER || MAP]');
                    this.game.renderer.renderLine('<< Help', 'attribute ---- [NAME || COLOR || ICON] / [icon you want to change]');
                    this.game.renderer.renderLine('<< Help', 'Icons are submitted as character codes, color as hex rgb values.');
                    this.game.renderer.renderLine('<< Help', 'new ---- The new value.');
                    break;
                    
                case 'CLEAR':
                    this.game.renderer.renderLine('<< Help', 'CLEAR');
                    this.game.renderer.renderLine('<< Help', 'Clears the console.');
                    this.game.renderer.renderLine('<< Help', 'CLEAR');
                    break;
                    
                case 'HELP': 
                    this.game.renderer.renderLine('<< Help', 'HELP');
                    this.game.renderer.renderLine('<< Help', 'Provides information on the commands in Rulegame.');
                    this.game.renderer.renderLine('<< Help', 'HELP [command]');
                    this.game.renderer.renderLine('<< Help', 'command ---- Displays information on that specific command.');
                    break;
                    
                default:
                    this.game.renderer.renderLine('<< Help', query + ' is not a valid command.');
            }
            return;
        }
        this.game.renderer.renderLine('<< Help', 'For more information on a specific command, type HELP command-name.');
        
        this.game.renderer.renderLine('<< Help', 'CHANGE ---- Changes an attribute.');
        this.game.renderer.renderLine('<< Help', 'CLEAR ---- Clears the console.');
        this.game.renderer.renderLine('<< Help', 'HELP ---- Provides Help information for Rulegame commands.');
        
    }
    
}