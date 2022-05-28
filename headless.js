var oldDrawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype.drawImage = function() {
    if(arguments[0].tagName === "IMG") {
        let img = new Image()
        img.crossorigin = "anonymous"
        img.src = "a"
        arguments[0] = img
        console.log(arguments[0].src)
    }
    
    console.log(arguments[1], arguments[2], arguments[3], arguments[4])
    oldDrawImage.apply(this, arguments);
}
