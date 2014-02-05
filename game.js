(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var DIM_Y = 500;
  var DIM_X = 500;
  var FPS = 30;
  // Actually seconds / frame..

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(15);
  }

  Game.prototype.addAsteroids = function(numAsteroids) {
    var asteroids = [];

    for (i = 0; i < numAsteroids; i++) {
      asteroids.push(Asteroids.randomAsteroid(DIM_X, DIM_Y));
    }

    return asteroids;
  }

  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, DIM_X, DIM_Y);

    for (i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }

  }

  Game.prototype.move = function() {
    for (i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }

  Game.prototype.step = function() {
    this.draw();
    this.move();
  }

  Game.prototype.start = function() {

    game = this

    setInterval(game.step.bind(game), FPS);
  }
})(this);