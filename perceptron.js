class Perceptron {
  constructor (inputNumber, activator) {
    this.activator = activator // 激活函数
    this.weights = genArray(inputNumber)  // 初始化权值
    this.bias = 0
  }

  toString() {
    return `weights:${this.weights}, bias:${this.bias}`
  }
  // 输出结果
  predict (inputVector) {
    return this.activator(
            inputVector
              .map((d, i) => d * this.weights[i]) // 相乘
              .reduce((x,y) => x+y) // 求和
            + this.bias
           )
  }
  // 训练
  train (inputVectors, labels, iteration, rate) {
    let i = 0
    while(i++ < iteration) {
      this._oneIteration(inputVectors, labels, rate)
    }
  }

  _oneIteration (inputVectors, labels, rate) {
    const samples = inputVectors.map((d, i) => [d, labels[i]])
    inputVectors.forEach((inputVector, i) => {
      const output = this.predict(inputVector)
      this._updateWeights(inputVector, output, labels[i], rate)
    })
  }

  _updateWeights (inputVector, output, label, rate) {
    const delta = label - output
    this.weights = inputVector.map((d, i) => this.weights[i] + d * delta * rate)
    this.bias += rate * delta
    console.log(`train: weights: ${this.weights}, bias: ${this.bias}`)
  }
}

function genArray(length, initial) {
  initial = initial || 0
  var arr = [], i=0
  while(i++<length) {
    arr.push(initial)
  }
  return arr
}

module.exports = Perceptron
