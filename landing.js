let fontSize = 24;
let maxAnyas = 1000;
let anyas = [];
let counter = 0;
let buttonOpacity = 0;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Courier New');
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  frameRate(25);

  button = createButton('click here');
  button.style('font-family', 'Courier New');
  button.style('font-size', '20px');
  button.style('border', 'none');
  button.style('background-color', 'rgba(0, 0, 0, 0.7)');
  button.style('color', 'white');
  button.style('padding', '10px 20px');
  button.style('opacity', buttonOpacity);
  button.position(width / 2 - 60, height / 2 - 20);

  button.mousePressed(() => {
    window.location.href = 'bouncing.html'; // Redirect to bouncing page
  });
}

function draw() {
  background(0, 20);
  fill('limegreen');

  if (counter < maxAnyas) {
    let x = random(width);
    let y = random(height);
    anyas.push({ x, y });
    counter++;
  }

  for (let i = 0; i < anyas.length; i++) {
    text('anya', anyas[i].x, anyas[i].y);
  }

  if (buttonOpacity < 1) {
    buttonOpacity += 0.01;
    button.style('opacity', buttonOpacity);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.position(width / 2 - 60, height / 2 - 20);
}
