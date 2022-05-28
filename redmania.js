function raco() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}
let ofr = CanvasRenderingContext2D.prototype.fillRect;

function lighttiles(color) {
  CanvasRenderingContext2D.prototype.fillRect = function() {
    if (arguments[0] === 0) {
        this.fillStyle=color
        ofr.apply(this, arguments);
    } else {
      return 
    }
   }
}

lighttiles("red")
