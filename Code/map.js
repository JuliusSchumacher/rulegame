var Map = function(size) {
    this.map = [];
    for (var x = 0; x < size; x++) {
        this.map.push([]);
        for (var y = 0; y < size; y++) {
            this.map[x].push(y);
        }
    }
    
    console.log(this);
    return this.map;
}