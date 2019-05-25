let durVal = 0.1
const colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
  ]
function Partical (x, y, context) {
    this.x = x
    this.y = y
    this.context = context
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.radius = 1.1
    this.show = false
    this.base = [x, y]
    this.furtherRadius = randomInt(1.1, 5.1)
    this.initValue()
    function randomInt (min, max) {
        return min + Math.random() * (max - min + 1)
    }
}

//粒子运动过程
//已知初始速度vx, vy,加速度系数a,
//起始位置坐标x0, y0,终点坐标x, y
//需要求出动画每一帧粒子的位置坐标nextX, nextY
Partical.prototype.initValue = function () {
    this.vx = 0
    this.vy = 0
    this.a = 0.01
    this.fricution = 0.9
    this.x0 = 0
    this.y0 = 0
}
//粒子运动过程
Partical.prototype.getNextPosition = function () {
    this.angle = Math.atan((this.y - this.y0) / (this.x - this.x0))
    this.vx += this.a * Math.cos(this.angle)
    this.vy += this.a * Math.sin(this.angle)
    this.vx *= this.fricution
    this.vy *= this.fricution
    this.x += this.vx
    this.y += this.vy
}
//根据partical坐标画粒子
Partical.prototype.drawPartical = function() {
    this.context.save()
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.arc(this.x, (this.y + 80), this.radius, Math.PI * 2, false)
    this.context.closePath()
    this.context.fill()
    this.context.restore()
}
Partical.prototype.drawStaticPartical = function () {

    this.getNextPosition()
    //当粒子的半径变小到一定程度后，将半径增大0.1
    if (this.radius < this.furtherRadius && this.show === false) {
        this.radius += durVal
    } else {
        this.show = true
    }

    //当粒子变大到一定程度后，半径减小0.1
    if (this.show) {
        this.radius -= durVal
    }

    //画粒子
    this.drawPartical()

    //将消失的粒子重置
    if (this.radius < 1 || this.y < 0) {
        this.x = this.base[0]
        this.y = this.base[1]
        this.show = false
    }
}
