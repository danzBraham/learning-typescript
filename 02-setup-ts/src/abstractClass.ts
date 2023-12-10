abstract class Shape {
  abstract area(): number;

  perimeter(): number {
    throw new Error('This method must be implemented in a concrete class');
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return Math.PI * 2 * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
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
