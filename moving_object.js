(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, rad, color) {
    this.pos = pos;
    this.vel = vel;
    this.rad = rad;
    this.color = color;
  };

  // vel {dx: , dy:  , mag:  }

  MovingObject.prototype.move = function (){
    var x = this.pos[0], y = this.pos[1];
    var newX = x + (this.vel.dx * this.vel.mag);
    var newY = y + (this.vel.dy * this.vel.mag);

    this.pos = [newX, newY];
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2*Math.PI, false);
    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){

    var x1 = this.pos[0], y1 = this.pos[1];
    var x2 = otherObject.pos[0], y2 = otherObject.pos[1];
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (distance < (this.rad + otherObject.rad)) {
      return true;
    } else {
      return false;
    }
  }

})(this);
