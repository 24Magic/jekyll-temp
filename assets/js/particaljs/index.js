let text = '❤'
const canvas = document.getElementById('canvasHeart')
const context = canvas.getContext('2d')
const offScreenCanvas = document.createElement('canvas')
const offScreenCanvasContext = offScreenCanvas.getContext('2d')
const W = canvas.width
const H = canvas.height
offScreenCanvas.width = W
offScreenCanvas.height = H
let points

//清除函数
function clear () {
    context.clearRect(0, 0, W, H)
    offScreenCanvasContext.clearRect(0, 0, W, H)
}

//启动函数
function start() {
    const data = {
        x: W / 2,
        y: H / 2,
        size: 212,
        text: text,
        context: offScreenCanvasContext,
        W: W,
        H: H
    }
    const word = new Shape(data)
    word.getData()
    points = word.points;
    (function draw () {
        clear()
            //text的画到画布上
        for (let i = 0; i < points.length; i ++) {
            // * 获取text内第i个像素点的坐标信息
            let partical = points[i]

            // * 从某个随机点加速运动到目标点targetX，targetY过程中，nowLocation的坐标
            let axis = partical.getNextPosition()
            // * 半径变化效果
            partical.changeRadius()
            // * 将该像素点i画到画布上
            partical.drawPartical(axis.x, axis.y)
        }
        context.drawImage(offScreenCanvas, 0, 0, W, H)
        let raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {window.setTimeout(callback)}
        setTimeout(()=>{
            raf.call(window, draw)
        }, 1000/60)
    }())
}
