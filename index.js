let name = 'norman';
console.log(name);

//Object declaration
let employerr = {
    baseSalary: 30000,
    overtime:10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}

console.log(employerr.baseSalary);
console.log(employerr.getWage());


const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    draw: function() {
        console.log('draw')
    }
}

circle.draw();

//Factory Functions
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw function');
        }
    };
}

const createCir = createCircle(1);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw contructor');
    }
}

const constructorCircle = new Circle(1);

//A object is also a function
const Circle1 = new Function('radius',
    `this.radius = radius;
    this.draw = function() {
        console.log('draw contructor');
    }
`
);

const aCircle = new Circle1(1);

//Closure & private properties
function Square(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    let comutationalFunction = function(factor) {

    };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        let x,y;
        comutationalFunction(0.1);
        // defaultLocation
        // this.radius
    };

    //Private(set) in JS
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location');
                
            defaultLocation = value;
        }
    });
}

const square = new Square(1);
square.draw();
