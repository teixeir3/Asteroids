(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var DIM_Y = Asteroids.DIM_Y = 500;
  var DIM_X = Asteroids.DIM_X = 500;
  var FPS = 30;
  var ASTR_CNT = 10;

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(ASTR_CNT);
    this.ship = new Asteroids.Ship();
    this.bullets = [];
		this.handlers = [];
  }

  Game.prototype.addAsteroids = function(numAsteroids) {
    var asteroids = [];

    for (var i = 0; i < numAsteroids; i++) {
      asteroids.push(Asteroids.randomAsteroid(DIM_X, DIM_Y));
    }

    return asteroids;
  }

  Game.prototype.draw = function() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0,0, DIM_X, DIM_Y);

    this.ship.draw(this.ctx);

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(this.ctx);
    }

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }

  }

  Game.prototype.checkCollisions = function() {
    var collision = false;

    for (var i = 0; i < this.asteroids.length; i++) {
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

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
    }

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }

  Game.prototype.step = function() {
    this.clearAsteroids();
    this.clearBullets();
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
    var game = this;
    console.log("Keys bound!");
    key("up", function(){ game.ship.power.bind(game.ship)(); return false;});
    key("down", function(){ game.ship.brake.bind(game.ship)(); return false;});
    key("left", function(){ game.ship.turnLeft.bind(game.ship)(); return false;});
    key("right", function(){ game.ship.turnRight.bind(game.ship)(); return false;});
    key("space", function(){ game.fireBullet.bind(game)(); return false;});
    
    return false;
  }

  Game.prototype.fireBullet = function() {
    this.bullets.push(this.ship.fireBullet());
    
    return false;
  }

  Game.prototype.clearBullets = function() {
    var validBullets = [];
    var validAsteroids = [];

    for(var i = 0; i < this.bullets.length; i++){
      if(this.isInBounds(this.bullets[i])){
        validBullets.push(this.bullets[i]);
      }
    }

    for(var i = 0; i < this.asteroids.length; i++){
      if(this.isInBounds(this.asteroids[i])){
        validAsteroids.push(this.asteroids[i]);
      }
    }

    this.bullets = validBullets;
    this.asteroids = validAsteroids;
  }

  Game.prototype.clearAsteroids = function() {
    // var validBullets = [];
    // var validAsteroids = [];
    if (this.asteroids.length > 0 && this.bullets.length > 0) {
      for(var i = 0; i < this.bullets.length; i++ ){
        for (var j = 0; j < this.asteroids.length; j++){
          if(this.bullets[i].isCollidedWith(this.asteroids[j])){
            this.asteroids[j].vel.mag = 0;
            this.asteroids[j].pos = [920, 920];
            this.bullets[i].vel.mag = 0;
            this.bullets[i].pos = [1000, 1000];
          }
        }
      }
      // for (var j = 0; j < this.asteroids.length; j++){ // 1 ast
      //   for(var i = 0; i < this.bullets.length; i++ ){ // 2 bullets
      //     if(!this.asteroids[j].isCollidedWith(this.bullets[i])){ // bul 1
      //       if (validAsteroids.indexOf(this.asteroids[j]) == -1) {
      //         validAsteroids.push(this.asteroids[j]);
      //       }
      //     }
      //   }
      // }
      //
      //
      // this.asteroids = validAsteroids;
      // this.bullets = validBullets;
    }
  }




  Game.prototype.isInBounds = function(obj){
    if(obj.pos[0] <= DIM_X && obj.pos[0] >= 0 &&
      obj.pos[1] <= DIM_Y && obj.pos[1] >= 0){
        return true;
    } else {
      return false;
    }
  }

})(this);