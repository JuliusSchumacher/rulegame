var Player = function(name, pos, icon) {
    this.name = name;
    this.position = pos;
    this.icon = String.fromCharCode(icon);
    
    this.move = function(direction) {
        switch(direction) {
            case 0:
                this.position[0]--;
                break;
            case 1:
                this.position[1]--;
                break;
            case 0:
                this.position[0]++;
                break;
            case 0:
                this.position[1]++;
                break;
        }
    }
    
    console.log("New Player " + this.name + " at " + this.position[0] + " " + this.position[1] + " with Icon " + this.icon);
}