function Spy(target, method) {
  var originalFunction = target[method]

  var result = {
    count: 0
  }

  target[method] = function() {
    result.count++ // track function was called
    return originalFunction.apply(this, arguments)
  }

  return result
}

module.exports = Spy
