var zenia, tourus, cyclap, deformation;
function setup() {
  createCanvas(800,400);
  zenia=createSprite(200, 200, 50, 50);
  tourus=createSprite(200, 275, 50, 50);
  cyclap=createSprite(200, 350, 50, 50);
}

function draw() {
  background(255,255,255);
  zenia.speed=60;
  zenia.velocityX=60;
  zenia.deformation=(1/2*zenia.weigth*zenia.speed*zenia.speed)/2
  tourus.speed=50;
  tourus.velocityX=50;
  tourus.deformation=(1/2*tourus.weigth*tourus.speed*tourus.speed)/2
  cyclap.speed=45;
  cyclap.velocityX=45;
  cyclap.deformation=(1/2*cyclap.weigth*cyclap.speed*cyclap.speed)/2
  if (zenia.deformation>=181) {
      zenia.shapeColor="red"
  } if (zenia.deformation<=180 && zenia.deformation<=80) {
      zenia.shapeColor="yellow"
  } else {
    zenia.shapeColor="green"
  }
  if (tourus.deformation>=181) {
    tourus.shapeColor="red"
} if (tourus.deformation<=180 && tourus.deformation<=80) {
    tourus.shapeColor="yellow"
} else {
  tourus.shapeColor="green"
}
if (cyclap.deformation>=181) {
  cyclap.shapeColor="red"
} if (cyclap.deformation<=180 && cyclap.deformation<=80) {
  cyclap.shapeColor="yellow"
} else {
cyclap.shapeColor="green"
}
  var wall1 = createSprite(600, 175, 50, 75);
  var wall2 = createSprite(600, 250, 50, 75);
  var wall3 = createSprite(600, 325, 50, 75);
  drawSprites();
}