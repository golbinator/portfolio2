let img;

function preload() {
  img = loadImage("child.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let stepSize = floor(map(mouseX, 0, width, 4, 40));
  
  img.loadPixels();
  for (let x = 0; x < img.width; x += stepSize) {
    for (let y = 0; y < img.height; y += stepSize) {
      let i = (y * img.width + x) * 4;
      let r = img.pixels[i];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];
      let a = img.pixels[i + 3];
      let luma = 0.299 * r + 0.587 * g + 0.114 * b;
      let diameter = map(luma, 0, 255, 0, stepSize);
      fill(255);
      noStroke();
      ellipse(
        map(x, 0, img.width, 0, width),
        map(y, 0, img.height, 0, height - 50), // Adjust height to leave space for text
        diameter,
        diameter
      );
    }
  }

  drawFooter();
}

function drawFooter() {
  fill(255);
  noStroke();
  rect(0, height - 50, width, 50); // White rectangle at the bottom
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("thanks for playing. click here to restart", width / 2, height - 25);
}

function mousePressed() {
  if (mouseY > height - 50) { // Check if the click is within the footer area
    window.location.href = 'landing.html'; // Link back to the landing page
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
