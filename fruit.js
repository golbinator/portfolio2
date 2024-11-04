let img;
let button;
let canDraw = true;
let drawnPixels = [];
let drawStartTime;
let showInstructions = true; 

function preload() {
  img = loadImage("strawberry.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('ok next page');
  button.style('font-family', 'Arial');
  button.style('color', 'white');
  button.style('text-align', 'center');
  button.style('background-color', 'black');
  button.style('border', '2px solid white');
  button.style('padding', '10px 20px');
  button.position(width / 2 - 60, height / 2 - 20); // Center button
  button.hide(); // Initially hide the button
  button.mousePressed(() => {
    window.location.href = 'kid.html'; 
  });
  drawStartTime = null;
}

function draw() {
  background(20);
  image(img, width / 2 - img.width / 2, height / 2 - img.height / 2);
  
  if (showInstructions) {
    drawInstructions(); 
  }

  if (canDraw) {
    drawMouseMovementParticles();
    checkButtonVisibility(); 
  }

  drawLines(); 
}

function drawInstructions() {
  fill(255); 
  textAlign(CENTER);
  textSize(32);
  text('draw all over the image', width / 2, height / 2 - img.height / 2 - 30); 
}

function drawMouseMovementParticles() {
  if (mouseIsPressed) {
    if (!drawStartTime) {
      drawStartTime = millis(); 
      showInstructions = false; 
    }
    let d = dist(mouseX, mouseY, pmouseX, pmouseY);
    let hueValue = (frameCount % 360); 
    stroke(hueValue, 100, 100);
    strokeWeight(d + 1);
    line(mouseX, mouseY, pmouseX, mouseY);

    // Store drawn pixels
    let posX = floor(mouseX - (width / 2 - img.width / 2));
    let posY = floor(mouseY - (height / 2 - img.height / 2));
    drawnPixels.push({ x: posX, y: posY });
  }
}

function drawLines() {
  strokeWeight(10);
  for (let p of drawnPixels) {
    if (p.x >= 0 && p.x < img.width && p.y >= 0 && p.y < img.height) {
      stroke(255); 
      point(p.x + (width / 2 - img.width / 2), p.y + (height / 2 - img.height / 2)); 
    }
  }
}

function checkButtonVisibility() {
  if (drawStartTime && millis() - drawStartTime > 7000) { 
    button.show(); 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



