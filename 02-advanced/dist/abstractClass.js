"use strict";
class Shape {
    perimeter() {
        throw new Error('This method must be implemented in a concrete class');
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return Math.PI * 2 * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
// Create shapes
const circle = new Circle(14);
const rectangle = new Rectangle(20, 10);
// Calculate and print area and perimeters
console.log(`Circle area: ${circle.area()}`);
console.log(`Circle perimeter: ${circle.perimeter()}`);
console.log(`Rectangle area: ${rectangle.area()}`);
console.log(`Rectangle perimeter: ${rectangle.perimeter()}`);
