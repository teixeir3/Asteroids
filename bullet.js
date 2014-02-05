(function(root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {})


    var RADIUS = 1;
    var COLOR = "green";

    var Bullet = Asteroids.Bullet = function(pos, vel) {
      Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR)
    }
    Bullet.inherits(Asteroids.MovingObject);

})(this);