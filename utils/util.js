const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getDistance = (lat1, lng1, lat2, lng2)=>{
  var radLat1 = lat1*Math.PI / 180.0;
  var radLat2 = lat2*Math.PI / 180.0;
  var a = radLat1 - radLat2;
  var b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
  Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
  s = s *6378.137 ;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
  }

const request = (options) => {
  var BaseUrl = "http://192.168.1.24:8899"
  return new Promise((resolve, reject) => {
    if (!options.method) {
      options.method = "GET"
    }
    Object.assign(options, {
      url: BaseUrl + options.url,
      success: resolve,
      fail: reject,
      complete: wx.hideLoading,
    })
    wx.showLoading({
      title: '玩命加载...',
    })
    wx.request(options)
  })
}
module.exports = {
  formatTime: formatTime,
  getDistance:getDistance,
  tool: request
}
