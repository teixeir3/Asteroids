(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})

  var COLOR = "lightblue";
  var RAD = 20;

  var Asteroid = Asteroids.Asteroid = function(pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel, RAD, COLOR);

  }

  Asteroid.inherits(Asteroids.MovingObject);

  var randomAsteroid = Asteroids.randomAsteroid = function(dimx, dimy){
    var x = [0, dimx][Math.floor(Math.random()*2)];
    var y = Math.floor(Math.random() * dimy);
    var vel = randomVel();

    return new Asteroid([x,y], vel);
  }

  var randomVel = function() {
    var dx = Math.random() * 2 - 1;
    var dy = Math.random() * 2 - 1;
    var l = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    dx = dx / l;
    dy = dy / l;

    var mag = Math.random() * 10;

    return {dx: dx, dy: dy, mag: mag};
  }

})(this);