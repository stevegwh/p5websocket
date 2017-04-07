var socket;
function setup() {
  socket = io.connect('localhost:3000');
  socket.on('mouse', newDrawing);
  var canvas = createCanvas(640,480);
  canvas.parent("sketch");
  background(0);
}

function newDrawing(data) {
  noStroke();
  fill(255,100,0);
  ellipse(data.x, data.y, 15, 15);

}
function draw() {
  fill(255);
  if(mouseIsPressed) {
    if(mouseButton == LEFT) {
      noStroke();
      ellipse(mouseX, mouseY, 15, 15);
      var data = {
        x: mouseX,
        y: mouseY
      }

      socket.emit('mouse', data);
    }
  }
}
