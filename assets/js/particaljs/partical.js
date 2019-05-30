const colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
  ]
function Partical (targetX, targetY, context) {
    this.durVal = 0.1
    this.targetX = targetX
    this.targetY = targetY
    this.context = context
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.radius = 3.1
    this.show = false
    this.furtherRadius = randomInt(3.1, 6.1)
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
    this.arrived = false
    this.timerNum = 10
    this.vx = 0
    this.vy = 0
    this.a = 0
    this.startX = 0
    this.startY = 0
    this.distance = 0
    this.arrivedDistance = 0
    this.nowLocation = {x: 0, y: 0}
}
//粒子运动过程
Partical.prototype.getNextPosition = function () {
    this.arrived = false
    this.startX = Math.random() * (this.targetX - W/2) * 10 + W/2
    this.startY = Math.random() * (this.targetY - H/2) * 10 + H/2
    this.distance = Math.sqrt(Math.pow((this.targetX - this.startX), 2) + Math.pow((this.targetY - this.startY), 2))
    this.angle = Math.abs(Math.atan2((this.targetY - this.startY), (this.targetX - this.startX)))
    // * 计算同时到达目标点时加速度a的值,由加速度方程求得
    this.a = 2 * this.distance / Math.pow(this.timerNum, 2)
    this.ax = this.a * Math.cos(this.angle)
    this.ay = this.a * Math.sin(this.angle)

    // * 根据目标点在起始点的不同位置,判断vx,vy取值正负
    if (this.targetY > this.startY) {
        this.vy += this.ay
    } else {
        this.vy -= this.ay
    }
    if (this.targetX > this.startX) {
        this.vx += this.ax
    } else {
        this.vx -= this.ax
    }
    this.nowLocation.x = this.startX + this.vx
    this.nowLocation.y = this.startY + this.vy
    this.arrivedDistance = Math.sqrt(Math.pow((this.nowLocation.x - this.startX), 2) + Math.pow((this.nowLocation.y - this.startY), 2))

    // * 当该像素点i运动距离大于总距离时，表示到达目标点
    if (this.arrivedDistance > this.distance) {
        this.arrived = true

    }
    if (this.arrived) {
        return {
            x: this.targetX,
            y: this.targetY
        }
    } else {
        return {
            x: this.nowLocation.x,
            y: this.nowLocation.y
        }
    }
}
//根据partical坐标画粒子
Partical.prototype.drawPartical = function(x, y) {
    this.context.save()
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.arc(x, y, this.radius, Math.PI * 2, false)
    this.context.closePath()
    this.context.fill()
    this.context.restore()
}
Partical.prototype.changeRadius = function () {

    //当粒子的半径变小到一定程度后，将半径增大0.1
    if (this.radius < this.furtherRadius && this.show === false) {
        this.radius += this.durVal
    } else {
        this.show = true
    }

    //当粒子变大到一定程度后，半径减小0.1
    if (this.show) {
        this.radius -= this.durVal
    }


    //将消失的粒子重置
    if (this.radius < 3.1) {
        this.show = false
    }
    if (this.radius > 6.1) {
        this.show = true
    }
}
