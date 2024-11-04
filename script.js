


class RandomWalker {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    step() {
      let choice = floor(random(9));
      if (choice === 0) {
        this.x += 1; // Move Right
      } else if (choice === 1) {
        this.x -= 1; // Move Left
      } else if (choice === 2) {
        this.y += 1; // Move Down
      } else if (choice === 3) {
        this.y -= 1; // Move Up
      } else if (choice === 4) {
        this.x += 1;
        this.y += 1; // Down-Right
      } else if (choice === 5) {
        this.x -= 1;
        this.y += 1; // Down-Left
      } else if (choice === 6) {
        this.x += 1;
        this.y -= 1; // Up-Right
      } else {
        this.x -= 1;
        this.y -= 1; // Up-Left
      }
    }
  
    display() {
      stroke(0, 50);
      strokeWeight(2);
      point(this.x, this.y);
    }
  }
  
  let walker;
  let trail = [];
  let textX, textY;
  let textSpeedX, textSpeedY;
  let textSizeValue = 20;
  let showClickMe = false;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    walker = new RandomWalker(width / 2, height / 2);
  
    textX = random(width);
    textY = random(height);
    textSpeedX = random(1, 5); // Slower speed
    textSpeedY = random(1, 5);
  
    textAlign(CENTER, CENTER);
    background(255);
  }
  
  function draw() {
    background(255);
  
    trail.push({ x: walker.x, y: walker.y });
  
    if (trail.length > 10000) {
      trail.shift(); // Remove oldest position
    }
  
    walker.step();
    walker.display();
  
    for (let i = 0; i < trail.length; i++) {
      stroke(0, 50);
      strokeWeight(2);
      point(trail[i].x, trail[i].y);
    }
  
    fill(255, 0, 0);
    textSize(textSizeValue);
    let displayText = showClickMe ? "click me!" : "they're hungry";
    text(displayText, textX, textY);
  
    textX += textSpeedX;
    textY += textSpeedY;
  
    // Bounce off the edges
    if (textX > width - textSizeValue / 2 || textX < textSizeValue / 2) {
      textSpeedX *= -1;
        mySound.play()
    }
    if (textY > height - textSizeValue / 2 || textY < textSizeValue / 2) {
      textSpeedY *= -1;
       mySound.play()
         
    }
  }
  
  function mousePressed() {
    let d = dist(mouseX, mouseY, textX, textY);
    if (d < textSizeValue) {
      if (showClickMe) {
        window.location.href = 'index.html'; // Go back to the landing page
      } else {
        showClickMe = true;
      }
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
