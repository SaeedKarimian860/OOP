// function hex(r, g, b) {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   hex(255, 100, 25);
//   rgb(255, 100, 25);
//   //#ff6419

//   function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//       const { r, g, b } = this;
//       return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//       const { r, g, b } = this;
//       return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };
//     return color;
//   }

//   const firstColor = makeColor(35, 255, 150);
//   firstColor.hex();
//   firstColor.rgb();

//   const black = makeColor(0, 0, 0);
//   black.rgb();
//   black.hex();

//Constructor Functions
// Creates a blank, plain JavaScript Object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object;
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// (a=1.0) is setting a default for the alpha channel
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);
