// Task3 : Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
//  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area
//  calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for
//  the 'Triangle' class.

class Shape{
    area(){
        throw new console.error("Area must be implemented in the subclass.");
    }
}

class Circle extends Shape{
    constructor(r){
        super(); // calls the parent class constructor
        this.radius = r;
    }

    area(){
        return 3.14 * this.radius ** 2;
    }
}

class Triangle extends Shape{
    constructor(l, b){
        super();
        this.length = l;
        this.bredth = b;
    }

    area(){
        return 0.5 * this.length * this.bredth;
    }
}

const c = new Circle(5);
console.log(c.area())

const t = new Triangle(5, 7);
console.log(t.area())