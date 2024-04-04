function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  let cols = 7; 
  let rows = ceil(28 / cols); 
  
  let boxWidth = width / cols;
  let boxHeight = height / rows;
  
  let index = 0; 
  let iindex = 0;
  let colindex=0;
  
  for(let j = 0; j < rows; j++) {
    iindex=0;
    for(let i = 0; i < cols; i++) {
      if(index >= 28) break; 
      let x = i * boxWidth;
      let y = j * boxHeight;
      
      let col = color(random(255), random(255), random(255)); 
      
      fill(col);
      rect(x+10*iindex, y+10*colindex, boxWidth, boxHeight);
      
      let num = index+1;
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(num, x + boxWidth/2, y + boxHeight/2);
      iindex++;
      index++; 
    }
    colindex++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}