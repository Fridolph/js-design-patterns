// 某停车场，分3层，每层100个车位
// 每个车位都能监控到车辆的驶入和离开
// 车辆进入前，显示每层空余车位数量
// 车辆进入时，摄像头可识别车牌号和时间
// 车辆出来时，出口显示车牌号和停车时长
class Part {
  constructor(level, left) {
    this.level = level
    this.left = left
  }
  showLeft() {
    console.log(`当前层数 ${this.level}, 剩余${this.left}`)
  }
  enter() {
    console.log(``)
  }
}

class Car {
  constructor(number, time) {
    this.number = number
    this.time = time
  }
}
