var ctx=document.querySelector('canvas').getContext('2d');
// pen.fillStyle='purple';
// pen.fillRect(80,70,80,80);
// pen.fillStyle='yellow';
// pen.fillRect(90,80,100,80);

// pen.beginPath();
// pen.moveTo(125, 125);
// pen.lineTo(125, 45);
// pen.lineTo(45, 125);
// pen.closePath();
// pen.fill();

ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    //body
    ctx.moveTo(75,123);
    ctx.lineTo(75,260);
    ctx.stroke();

    //hand1
    ctx.moveTo(75,140);
    ctx.lineTo(200,180);
    ctx.stroke();

     //hand2
     ctx.moveTo(75,-140);
     ctx.lineTo(200,180);
     ctx.stroke();
 