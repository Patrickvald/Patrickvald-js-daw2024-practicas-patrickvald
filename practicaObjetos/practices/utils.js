//Practice 1 Create and use objects
function practice1() {
    const p1 = new createPoint(10, 20);
    console.log(`Point 1 => x: ${p1.x}, y: ${p1.y}`);
    const p2 = new createPoint(30, 40);
    console.log(`Point 2 => x: ${p2.x}, y: ${p2.y}`);
    p1.change(5, 15);
    console.log(`Point 1 edited => x: ${p1.x}, y: ${p1.y}`);
    const copyPoint = p1.copy();
    console.log(`Copy of point 1 => x: ${copyPoint.x}, y: ${copyPoint.y}`);
    const sumPoint = p1.sum(p2);
    console.log(`Sum of points p1 and p2 => x: ${sumPoint.x}, y: ${sumPoint.y}`);

}

//Function to create points
function createPoint(x, y) {
    this.x = typeof x === 'number' ? x : 0;
    this.y = typeof y === 'number' ? y : 0;
}

//Method to change the point coordinates
createPoint.prototype.change = function(x, y) {
    this.x = typeof x === 'number' ? x : 0;
    this.y = typeof y === 'number' ? y : 0;
}

//Method to create a copy of the  current object
createPoint.prototype.copy = function() {
    return new createPoint(this.x, this.y);
}

//Method to sum the coordinates of two points
createPoint.prototype.sum = function(point) {
    if(point instanceof createPoint) {
        return new createPoint(this.x + point.x, this.y + point.y);
    }
    throw new Error('You need to pass a point object');
}

//Practice 2 Working with Arrays
//To create this reduce to calculate the arithmetic mean of an array of numbers we have to create it in the prototype of the Array object.

function practice2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`The arithmetic mean of the array is ${numbers.mean()}`);

    //I think that the big point of this exercise is to understand the adventages of put the methods in the prototype of the Array object, now I can use it in this way:
    const resultado = numbers.filter(number => number % 2 === 0).map(number => number * 2).mean()
    console.log(resultado);
}

Array.prototype.mean = function () {
    return this.reduce((a, b) => a + b) / this.length;
}

/*After a while trying with arrow function I realized that the this keyword is not available in arrow functions, so I had to use the old way of writing it.
*/