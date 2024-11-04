class RandomWalker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    let choice = floor(random(8));
    if (choice === 0) {
      this.x += 2;
    } else if (choice === 1) {
      this.x -= 2;
    } else if (choice === 2) {
      this.y += 2;
    } else if (choice === 3) {
      this.y -= 2;
    } else if (choice === 4) {
      this.x += 2;
      this.y += 2;
    } else if (choice === 5) {
      this.x -= 2;
      this.y += 2;
    } else if (choice === 6) {
      this.x += 2;
      this.y -= 2;
    } else {
      this.x -= 2;
      this.y -= 2;
    }
  }

  display() {
    stroke(0, 50);
    strokeWeight(2);
    point(this.x, this.y);
  }
}

let walkers = [];
let numWalkers = 10;
let trail = [];
let textX, textY;
let textSpeedX, textSpeedY;
let textSizeValue = 20;
let showClickMe = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numWalkers; i++) {
    walkers.push(new RandomWalker(width / 2, height / 2));
  }
  textX = random(width);
  textY = random(height);
  textSpeedX = random(2, 4);
  textSpeedY = random(2, 4);
  textAlign(CENTER, CENTER);
  background(255);

  setTimeout(() => {
    showClickMe = true;
  }, 5000); // Change to "click me!" after 5 seconds
}

function draw() {
  background(255);
  for (let walker of walkers) {
    walker.step();
    walker.display();
    trail.push({ x: walker.x, y: walker.y });
  }
  if (trail.length > 1000) {
    trail.shift();
  }
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
  
  if (textX > width - textSizeValue / 2 || textX < textSizeValue / 2) {
    textSpeedX *= -1;
  }
  if (textY > height - textSizeValue / 2 || textY < textSizeValue / 2) {
    textSpeedY *= -1;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, textX, textY);
  if (d < textSizeValue) {
    if (showClickMe) {
      window.location.href = 'strawberry.html';
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

