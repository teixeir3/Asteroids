(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var DIM_Y = Asteroids.DIM_Y = 500;
  var DIM_X = Asteroids.DIM_X = 500;
  var FPS = 30;
  var ASTR_CNT = 0;

  // Actually seconds / frame..

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(ASTR_CNT);
    this.ship = new Asteroids.Ship();
  }

  Game.prototype.addAsteroids = function(numAsteroids) {
    var asteroids = [];

    for (i = 0; i < numAsteroids; i++) {
      asteroids.push(Asteroids.randomAsteroid(DIM_X, DIM_Y));
    }

    return asteroids;
  }

  Game.prototype.draw = function() {
    // this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0,0, DIM_X, DIM_Y);

    this.ship.draw(this.ctx);

    for (i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }

  }

  Game.prototype.checkCollisions = function() {
    var collision = false;

    for (i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        this.stop();
        alert("YOU CRASHED!");
      };
    }
  }

  Game.prototype.stop = function() {
    clearInterval(this.intervalID);
  }

  Game.prototype.move = function() {

    this.ship.move();
    for (i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }

  Game.prototype.step = function() {
    this.checkCollisions();
    this.draw();
    this.move();
  }

  Game.prototype.start = function() {
    this.bindKeyHandlers();
    game = this;
    this.intervalID = setInterval(game.step.bind(game), FPS);
  }

  Game.prototype.bindKeyHandlers = function() {
    key("up", this.ship.power.bind(this.ship));
    key("down", this.ship.brake.bind(this.ship));
    key("left", this.ship.turnLeft.bind(this.ship));
    key("right", this.ship.turnRight.bind(this.ship));
  }

})(this);