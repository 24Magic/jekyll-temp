window.onload = function() {
    start()
}

let text = '❤'
const canvas = document.getElementById('canvasHeart')
const context = canvas.getContext('2d')
let W = canvas.width
let H = canvas.height

//清除函数
function clear () {
    const canvas = document.getElementById('canvasHeart')
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, W, H)
}

//启动函数
function start() {
    const data = {
        x: W / 2,
        y: H / 2,
        size: 210,
        text: text,
        context: context,
        W: W,
        H: H
    }
    const word = new Shape(data)
    word.getData()
    let points = word.points;
    (function draw () {
        clear()
            //text的画到画布上
        for (let i = 0; i < points.length; i ++) {
            points[i].drawStaticPartical()
        }
        window.requestAnimationFrame(draw, canvas)
    }())
}
