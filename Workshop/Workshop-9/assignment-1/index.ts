import {Shape, Triangle, Rectangle, Square} from '../shape';


let p1:Point = {x:0,y:0};
let p2:Point = {x:6,y:6};
let p3:Point = {x:3,y:6};

var tri = new Triangle(3, [p1, p2, p3]);

console.log(tri.Area());

console.log(tri.Perimeter());


