export abstract class Shape{
    public edge:number;
    public points:Array<Point>;

    constructor(edge,points){
        this.edge = edge;
        this.points = points;
    }

    abstract Perimeter():number;
    abstract Area():number;
    
    findDistance(point1:Point, point2:Point):number{
        var a:number = point1.x - point2.x;
        var b:number = point1.y - point2.y;
        var dist:number = Math.sqrt(a*a + b*b);
        return dist;
    }
}

export class Triangle extends Shape{

    constructor(edge,points){
        super(edge,points);
    }

    Area():number{
        var point:Array<Point> = this.points;
        console.log("Area of Triangle");
        var area:number = 0.5 * (point[0].x * (point[1].y - point[2].y) + point[1].x * (point[2].y - point[0].y) + point[2].x * (point[0].y - point[1].y));
        return Math.abs(area);
    }

    Perimeter():number{
        var point:Array<Point> = this.points;
        var a:number = this.findDistance(point[0], point[1]);
        var b:number = this.findDistance(point[1], point[2]);
        var c:number = this.findDistance(point[2], point[0]);
        return a+b+c;
    }
}

export class Rectangle extends Shape{
    Area():number{
        var point:Array<Point> = this.points;
        var a:number = this.findDistance(point[0], point[1]);
        var b:number = this.findDistance(point[1], point[2]);
        console.log("Area of Rectangle");
        return a*b;
    }

    Perimeter():number{
        var point:Array<Point> = this.points;
        var a:number = this.findDistance(point[0], point[1]);
        var b:number = this.findDistance(point[1], point[2]);
        console.log("Perimeter of Rectangle");
        return 2*(a+b);
    }
}

export class Square extends Shape{
    Area():number{
        var point:Array<Point> = this.points;
        var a:number = this.findDistance(point[0], point[1]);
        console.log("Area of Square");
        return a*a;
    }

    Perimeter():number{
        var point:Array<Point> = this.points;
        var a:number = this.findDistance(point[0], point[1]);
        console.log("Perimeter of Square");
        return 4*a;
    }
}