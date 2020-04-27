var canvas;
var laptopNumber;
var button;
var laptopNumberInput;
var initialInput;
var submitButton;
var database;

function setup() {
  // canvas = createCanvas(100, 100);
  laptopNumber = "no laptop checked out";

  initialInput = createInput('name');
  laptopNumberInput = createInput('laptop number');
  submitButton = createButton('borrow laptop');
  submitButton.mousePressed(borrowLaptop);

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
   database = firebase.database();
 }

 function borrowLaptop() {
   var data = {
     initials: initialInput.value(),
     laptopNumber: laptopNumberInput.value()
   }
   console.log(data);
   var ref = database.ref('borrowed-laptops');
   ref.push(data);
 }

 // function increaseScore() {
 //   score++;
 // }

 function draw() {
   // background(0);
   // textAlign(CENTER);
   // textSize(32);
   // fill(255);
   // text("hi", width / 2, height / 2);
 }
