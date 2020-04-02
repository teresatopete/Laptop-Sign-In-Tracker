var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

function setup() {
  canvas = createCanvas(100, 100);
  score = 0;
  createP('Sign In')
  //button = createButton('date');
  //button.mousePressed(increaseScore);
  initialInput = createInput('Name');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);

  var config = {
    apiKey: "AIzaSyBVeaJnUZTjobwiVFD_cow0pY9AiTijXNE",
    authDomain: "laptop-charger-tracker.firebaseapp.com",
    databaseURL: "https://laptop-charger-tracker.firebaseio.com",
    projectId: "laptop-charger-tracker",
    storageBucket: "laptop-charger-tracker.appspot.com",
    messagingSenderId: "965113615786",
    appId: "1:965113615786:web:c13f336048ec7d02ba87d3",
    measurementId: "G-QQN1ZCH0YB"
  };
  firebase.initializeApp(config);
  //database = firebase.database();
  console.log(firebase);

  var database = firebase.database();
  var ref = database.ref('scores');

  var data = {
    name: "DAT",
    score: 12
  }
  ref.push(data);
}

function submitScore() {
  var data = {
    initials: initialInput.value(),
    score: score
  }
  console.log(data);
  var ref = database.ref('scores');
 ref.push(data);
}

function increaseScore() {
  score++;
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}
