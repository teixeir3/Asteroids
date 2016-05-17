(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var RADIUS = 10;
  var COLOR = "red";
  var DELTA_TURN = Math.PI*10/180;
  var DELTA_MAG = 5;


  var Ship = Asteroids.Ship = function() {
    Asteroids.MovingObject.call(this, [250, 250], {dx: 0, dy: -1, mag: 0}, RADIUS, COLOR);

  }
  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.fireBullet = function() {
    var bulletPos = [this.pos[0] + this.vel.dx*RADIUS, this.pos[1] + this.vel.dy*RADIUS];
    var bulletMag = this.vel.mag + 5;

    var bulletVel = {dx: this.vel.dx, dy: this.vel.dy, mag: bulletMag};



    return new Asteroids.Bullet(bulletPos, bulletVel);
  }

  Ship.prototype.power = function() {
		console.log("ship.power!");
    this.vel.mag += DELTA_MAG;
    
    return false;
  };

  Ship.prototype.brake = function() {
    // TODO: may want to limit braking to disable braking backwards.
    this.vel.mag -= DELTA_MAG;
    
    return false;
  }

  Ship.prototype.turnLeft = function() {
    var angle;

    if(this.vel.dy >=0){
      angle = Math.acos(this.vel.dx);
    } else {
      angle = -Math.acos(this.vel.dx);
    }

    angle -= DELTA_TURN;
    this.vel.dx = Math.cos(angle);
    this.vel.dy = Math.sin(angle);
    
    return false;
  }

  Ship.prototype.turnRight = function() {
    var angle;

    if(this.vel.dy >=0){
      angle = Math.acos(this.vel.dx);
    } else {
      angle = -Math.acos(this.vel.dx);
    }

    angle += DELTA_TURN;
    this.vel.dx = Math.cos(angle);
    this.vel.dy = Math.sin(angle);
    
    return false;
  }

  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2*Math.PI, true);
    ctx.arc(this.pos[0] + this.vel.dx*10, this.pos[1] + this.vel.dy*10, 5, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(this.pos[0] + this.vel.dx*10, this.pos[1] + this.vel.dy*10, 5, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.lineWidth = 2;
  }


})(this);