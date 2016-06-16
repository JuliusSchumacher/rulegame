function Renderer() {
    this.map;
    this.players;
    
    this.clearAll = function() {
        $('#console').empty();
    }
    
    this.renderMap = function(offset) {
        for (var x = 0; x < this.map.length; x++) {
            for (var y = 0; y < this.map[x].length; y++) {
                $('#console').append('<div class="tile">' + String.fromCharCode(this.map[x][y] + offset + x ) + '</div>').delay(20);
            }
            $('#console').append('<br>');
        }
        
        $('.tile').each(function(i){
            $(this).css('opacity', 0);
            $(this).delay(1000 + (0.1 * i)).animate({
                'opacity': 1.0
            }, 0);
        });
        
    }

    this.renderPlayers = function() {
        for (var i = 0; i < this.players.length; i++) {
            $('#console').append('<div class="player" style=" left:' + (18 * this.players[i].position[0]) + 'px; top:' + (18 * this.players[i].position[1]) + 'px;">' + this.players[i].icon + '</div>')
        }
    }
}