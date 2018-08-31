// 打车时，可以打转车或快车。任何车都有车牌号和名称
// 不同车价格不同，快车 1$/km 专车 2$/km
// 行程开始时，显示信息
// 行程结束时，显示打车金额（假定行程就5公里）

// 画出UML类图
// 用ES6语法写出该示例
class Car {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
}

class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，名称: ${this.car.name}, 车牌号: ${this.car.number}`)
  }
  end() {
    console.log(`行程结束，价格: ${this.car.price * 5}`)
  }
}

class KuaiChe extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 1
  }
}

class ZhuanChe extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2
  }
}

// 测试
let car = new KuaiChe('桑塔纳', 'XX001')
let trip = new Trip(car)
trip.start()
trip.end()
