(function(root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {})


    var RADIUS = 1;
    var COLOR = "green";

    var Bullet = Asteroids.Bullet = function(pos, vel) {
      Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR)
    }

    Bullet.inherits(Asteroids.MovingObject);

    Bullet.prototype.move = function (){
      var x = this.pos[0], y = this.pos[1];
      var newX = x + (this.vel.dx * this.vel.mag);
      var newY = y + (this.vel.dy * this.vel.mag);

      this.pos = [newX, newY];
    }

})(this);