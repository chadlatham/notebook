class MyFirstDataStructure {
  constructor (data) {
    this.data = data
  }

  set (data) {
    this.data = data
  }

  get () {
    return this.data
  }
}

var myStruct = new MyFirstDataStructure('ohai')
console.log(myStruct.get());
myStruct.set('bai')
console.log(myStruct.get());


// New example!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class RestrictedArray {
  constructor (maxLength) {
    this.maxLength = maxLength
    this.data = []
  }

  get () {
    return this.data
  }

  push (value) {
    if (this.data.length + 1 > this.maxLength) {
      throw new Error('The array is maxed out.')
    } else {
      this.data.push(value)
    }
  }
}

var arr = new RestrictedArray(3)
arr.push(1)
console.log(arr.get()) // ??
arr.push(2)
console.log(arr.get()) // ??
arr.push(3)
console.log(arr.get()) // ??
arr.push(4)
console.log(arr.get()) // ??


// New Example!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class LoopyArray {
  constructor(max) {
    this.max = max;
    this.arr = [];
    this.index = 0;
  }

  push(val) {
    if (this.index < this.max) {
      this.arr.push(val);
    } else {
      this.arr[this.index % this.max] = val;
    }
    this.index += 1;

    return this;
  }

  get() {
    return this.arr;
  }
}

var loopy = new LoopyArray(2)
loopy.push(1)
console.log(loopy.get()) // [1]
loopy.push(2)
console.log(loopy.get()) // [1,2]
loopy.push(3)
console.log(loopy.get()) // [3,2]
loopy.push(4)
console.log(loopy.get()) // [3,4]

var loopy = new LoopyArray(2)
console.log(loopy.push(1).push(2).push(3).push(4).get()) // [3,4]


// New Example!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
