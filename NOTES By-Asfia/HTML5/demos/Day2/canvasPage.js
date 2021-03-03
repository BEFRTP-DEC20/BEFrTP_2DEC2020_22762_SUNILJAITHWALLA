
var pen=document.querySelector('canvas').getContext('2d');

// pen.fillStyle="green";
// pen.fillRect(40,60,40,60);
// pen.strokeStyle="blue"
// pen.strokeRect(30,30,60,60)

pen.fillStyle="yellow";


pen.beginPath();
    pen.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    pen.fill();
    pen.moveTo(110, 75);
    pen.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    pen.moveTo(65, 65);
    pen.strokeStyle="black";
    pen.stroke();
pen.closePath();
pen.beginPath();
    pen.fillStyle="red";
    pen.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    pen.fill();
    pen.moveTo(95, 65);
    pen.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    pen.fill();
    pen.stroke();
pen.closePath();
  