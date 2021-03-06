"use strict";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

// Design
var circleFill = "rgba(255,160,30,1)";

var Particle = function (sx, sy) {
  this.sx = sx;
  this.sy = sy;
  this.vx = 0.0;
  this.vy = 0.0;
};

var n = 5;
var particles = [];

function createParticles(){
  for (var i = 0; i < n; ++i) {
    var sx = Math.random() * canvas.width;
    var sy = Math.random() * canvas.height;
    particles[i] = new Particle(sx, sy);
  }
}
createParticles();

var drawLine = function (x0, y0, x1, y1, alpha) {
  context.lineWidth = "hairline";
  context.strokeStyle = "rgba(255,160,30," + alpha + ")";
  context.beginPath();
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.closePath();
  context.stroke();
};

var drawCircle = function (x, y, r) {
  context.fillStyle = circleFill;
  context.beginPath();
  context.arc(x, y, r, 0.0, Math.PI * 2.0);
  context.closePath();
  context.fill();
};

var mouseX = 0.0;
var mouseY = 0.0;

//Physics Properties
var particleInfluenceRadius = 26.0;
var particleAttractionRadius = 18.0;
var partcileAttrationForce = 1.0 / 200.0;
var partcileVelocityDecay = 0.99;
var particleMouseInfluenceRadius = 48.0;
var particleMouseRejectionForce = 1.0 / 96.0;

var solveAndDraw = function () {
  var strength;
  var i = particles.length;
  while (--i > -1) {
    var particle = particles[i];
    var j = i;
    while (--j > -1) {
      var neighbour = particles[j];
      var dx = particle.sx - neighbour.sx;
      var dy = particle.sy - neighbour.sy;
      var dd = Math.sqrt(dx * dx + dy * dy);
      if (dd > particleInfluenceRadius) {
//        -- out of radius
      } else if (dd > particleAttractionRadius) {
//        -- attraction
        particle.vx -= dx * partcileAttrationForce;
        particle.vy -= dy * partcileAttrationForce;
        neighbour.vx += dx * partcileAttrationForce;
        neighbour.vy += dy * partcileAttrationForce;
        strength = 1.0 - (dd - particleAttractionRadius) / (particleInfluenceRadius - particleAttractionRadius);
        drawLine(
          particle.sx,
          particle.sy,
          neighbour.sx,
          neighbour.sy,
          strength);
      } else if (dd > 0.0) {
//        -- rejection:spring
        dd = 0.5 * (dd - particleAttractionRadius) / dd;
        dx *= dd;
        dy *= dd;
        particle.vx -= dx;
        particle.vy -= dy;
        neighbour.vx += dx;
        neighbour.vy += dy;
        drawLine(
          particle.sx,
          particle.sy,
          neighbour.sx,
          neighbour.sy, 1.0);
      }
    }
  }
};

var moveAndDraw = function () {
  for (var i = 0; i < n; ++i) {
    var particle = particles[i];
    var sx = particle.sx;
    var sy = particle.sy;
//    mouse attraction
    var dx = mouseX - sx;
    var dy = mouseY - sy;
    var dd = Math.sqrt(dx * dx + dy * dy);
    if (dd < particleMouseInfluenceRadius) {
      particle.vx -= dx * particleMouseRejectionForce;
      particle.vy -= dy * particleMouseRejectionForce;
    }
//    damp velocity
    particle.vx *= partcileVelocityDecay;
    particle.vy *= partcileVelocityDecay;
//    apply velocity
    sx += particle.vx;
    sy += particle.vy;
//    bounds
    if (sx < 0) {
      sx = 0;
      particle.vx = -particle.vx;
    } else if (sx > width) {
      sx = width;
      particle.vx = -particle.vx;
    }
    if (sy < 0) {
      sy = 0;
      particle.vy = -particle.vy;
    } else if (sy > height) {
      sy = height;
      particle.vy = -particle.vy;
    }
//    draw
    drawCircle(sx, sy, 2.0);
//    write back
    particle.sx = sx;
    particle.sy = sy;
  }
};

var enterFrame = function () {
  context.clearRect(0, 0, width, height);
  solveAndDraw();
  moveAndDraw();
  window.requestAnimationFrame(enterFrame);
};

var mouseMove = function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
};

window.requestAnimationFrame(enterFrame);
canvas.addEventListener("mousemove", mouseMove);