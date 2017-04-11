var socket;

function setup() {
    socket = io.connect('https://p5websocket.herokuapp.com/');
    socket.on('mouse', newDrawing);
    socket.on('userConnect', updateUsers);
    var canvas = createCanvas(1000, 1000);
    canvas.parent("sketch");
    background(0);
}

function newDrawing(data) {
    noStroke();
    fill(255, 100, 0);
    ellipse(data.x, data.y, 15, 15);
}

function updateUsers(data) {
    $('#userNum').text(data);
}

function draw() {
    fill(255);
}

function mousePressed() {

    noStroke();
    ellipse(mouseX, mouseY, 15, 15);
    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);
}

function touchStarted() {

    noStroke();
    ellipse(mouseX, mouseY, 15, 15);
    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);
}
