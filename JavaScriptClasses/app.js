// This is a Constructor Function
function Color (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// If you call it on its own like a regular function
Color(35, 60, 190); // undefined
// It returns undefined. Come on!! :(


// The NEW operator:
// 1. Creates a blank, plain JavaScript Object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object;

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//      return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// // (a=1.0) is setting a default for the alpha channel
// Color.prototype.rgba = function (a=1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);


//Classes
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
const c1 = new Color(255, 67, 89, 'red');