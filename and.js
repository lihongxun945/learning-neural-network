const Perceptron = require('./perceptron.js')

const dataset = {
  inputVectors: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ],
  labels: [0, 0, 0, 1]
}

const p = new Perceptron(2, (x) => x > 0 ? 1 : 0)
p.train(dataset.inputVectors, dataset.labels, 10, 0.1)
console.log(p)

console.log(p.predict([1, 1]))
console.log(p.predict([1, 0]))
console.log(p.predict([0, 1]))
console.log(p.predict([0, 0]))
