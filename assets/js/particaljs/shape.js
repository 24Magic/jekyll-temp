var gridX = 7
var gridY = 7
function Shape (data) {
    this.x = data.x
    this. y = data.y
    this.size = data.size
    this.text = data.text
    this.context = data.context
    this.W = data.W
    this.H = data.H
    this.points = []
}

Shape.prototype.getData = function () {
    this.context.textAlign = "center"
    this.context.font = this.size + "px Arial"
    this.context.fillText(this.text, this.x, this.y)

    //复制画布上指定矩形的像素数据
    var _data =  this.context.getImageData(0, 0, this.W, this.H)
    //_data返回一个一个对象，是一个8位无符号整数的数组Unit8ClampedArray，包含每个像素点的rgba值
    var buffer = new Uint32Array(_data.data.buffer)

    for (let i = 0; i < this.H; i += gridY) {
        for (let j = 0; j < this.W; j += gridX) {
            if (buffer[i * H + j]) {
                var partical = new Partical(j, i, this.context)
                this.points.push(partical)
            }
        }
    }

}
