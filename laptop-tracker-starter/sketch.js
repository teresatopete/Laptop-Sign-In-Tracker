// Title: Bunch o' Dots
// Imagined, Designed, and Programmed by: Matthew Drew
// Date: 10/25/18
// Description: It's a circle packing function, with grayscale colors assigned to the different sizes of circle.
// Sources of ideas and inspiration (title, author, URL):
//  * "List of FIFA World Cup Official Match Balls" Wikipedia https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_official_match_balls
//  * "Random Circles, No Overlap" The Coding Train https://www.youtube.com/watch?v=XATr_jdh-44&t=543s"
//  *
//
// Includes code from (title, author, URL):
//  * "Random Circles, No Overlap" The Coding Train https://www.youtube.com/watch?v=XATr_jdh-44&t=543s"
//  *
//  *
// */

var circles = []; //sets the variable of "circles" as an empty array

function setup() {
  createCanvas(640, 360);

var overlapping = false;

var safe = 0; //creates variable to break function

	while (circles.length < 1000) { //500 tells the function how many circles to attempt to print
		var circle = {
			x: random(width),
			y: random(height),
			r: random(10,30)
		}

		var overlapping = false; //sets the variable of overlapping

		for (var j = 0; j < circles.length; j++) {
			var other = circles[j];
			var d = dist(circle.x, circle.y, other.x, other.y);
			if (d < circle.r + other.r) {
				overlapping = true; //this refers to the fact that if the circles are overlapping, then break the function and start again
				break;
			}
		}

		if (!overlapping) {
		circles.push(circle); //this tells the function that if the circles are overlapping, do not put a circle in that position
	}

  safe++;
  if (safe > 30000){  //these lines of code tell the function that if you run the code 10000 times and still can't find a place for every circle, then stop the code
    break;
  }
}

    for (var i = 0; i < circles.length; i++) {
      var grayvalues = 255/circles.length; //splits the grayvalues into different colors determined by the circle radius
      var steps = size/circles.length;
        stroke(51);
        fill(i*grayvalues); //fills the circles with the assigned grayvalue
        ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
	}
 }
