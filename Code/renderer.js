function Renderer() {
    this.map;
    this.players;
    
    this.renderMap = function(offset) {
        for (var x = 0; x < this.map.length; x++) {
            for (var y = 0; y < this.map[x].length; y++) {
                $('#console').append('<div style="width: 18px; height: 18px; float: left;">' + String.fromCharCode(this.map[x][y] + offset + x ) + '</div>');
            }
            $('#console').append('<br>');
        }
    }
    
    this.renderPlayers = function() {
        for (var i = 0; i < this.players.length; i++) {
            $('#console').append('<div class="player" style=" left:' + (18 * this.players[i].position[0]) + 'px; top:' + (18 * this.players[i].position[1]) + 'px;">' + this.players[i].icon + '</div>')
        }
    }
}