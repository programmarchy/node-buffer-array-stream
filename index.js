var through = require('through2')

module.exports = {
  toBuffer: function () {
    var stream = through.obj(function write(arr, enc, next) {
      var len = arr.length
      if (len > 0) {
        stream.push(new Buffer(arr))
      }
      next()
    })
    return stream
  },
  fromBuffer: function () {
    var stream = through.obj(function write(buf, enc, next) {
      var len = buf.length
      if (len > 0) {
        var arr = new Array(len)
        for (var i = 0; i < len; ++i) {
          arr[i] = buf[i]
        }
        stream.push(arr)
      }
      next()
    })
    return stream
  }
}
