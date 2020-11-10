var canvas;
var form, app, profile;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  form = new Form();
  app = new App();
}

function draw() {
  background(255,255,255);
}