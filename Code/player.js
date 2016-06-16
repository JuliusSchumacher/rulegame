var Player = function(name, pos, icon) {
    this.name = name;
    this.position = pos;
    this.icon = String.fromCharCode(icon);
    
    console.log("New Player " + this.name + " at " + this.position[0] + " " + this.position[1] + " with Icon " + this.icon);
}