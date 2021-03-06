var fs = require('fs');
var lineString = {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates":[]
    },
    "properties": {
      "name": ""
    }
};

fs.readFile('3.txt', function (err, data) {
    if (err) throw err;
    var dataStr = data.toString();
    //按行读取
    var strs = dataStr.split('\r\n');
    //取每一行
    for(var i = 0; i < strs.length; i++){
      var line = strs[i].split(',');
      //读取经纬度
      var lng = parseFloat(line[0]);
      var lat = parseFloat(line[1]);
      var arr = [lng, lat];
      lineString.geometry.coordinates.push(arr);
    }
    // console.log(lineString.geometry.coordinates[1]);
    // //写入到全国的边界数据
  var str = JSON.stringify(lineString);
  fs.writeFile('_3.json',str , function (err) {
    if (err) throw err;
    console.log('转化写入文件完成'); //文件被保存
  });
});