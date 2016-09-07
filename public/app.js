// create canvas
var canvas = new fabric.Canvas('canvas', {
  // set drawing mode
  // isDrawingMode: true
});
canvas.freeDrawingBrush.width = 10;


// testing - create rectangle
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

var rect2 = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

canvas.insertAt(rect, 3);
canvas.add(rect2);


// for use with cloneAsImage()
// var clone = function(obj) {
// 	obj.cloneAsImage(function(clone) {
// 		clone.set({
// 			left: obj.left,
// 			top: obj.top
// 		});
// 		canvas.insertAt();
// 	});
// };


$(document).ready(function() {
	// toggle drawing mode
  $('#button1').on('click', function(event) {
    event.preventDefault();
    canvas.isDrawingMode = !canvas.isDrawingMode;
  });	

  $('#colorPicker').on('change', function(event) {
    event.preventDefault();

    canvas.freeDrawingBrush = new fabric(canvas);
    canvas.freeDrawingBrush.color = event.val;
    canvas.freeDrawingBrush.width = 10;
  });	

});




// load a stringified path
var pathy = {"objects":[{"type":"path","originX":"center","originY":"center","left":350.75,"top":191.5,"width":396.5,"height":157,"fill":null,"stroke":"rgb(0, 0, 0)","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",152.5,270],["Q",152.5,270,153,270],["Q",153.5,270,153.25,268],["Q",153,266,153,265],["Q",153,264,153,261.5],["Q",153,259,154,256],["Q",155,253,156,252],["Q",157,251,158.5,249],["Q",160,247,161.5,246],["Q",163,245,165.5,244],["Q",168,243,170,242],["Q",172,241,174.5,240],["Q",177,239,180,237],["Q",183,235,187.5,232],["Q",192,229,193.5,227],["Q",195,225,198,222],["Q",201,219,204.5,215.5],["Q",208,212,211.5,209],["Q",215,206,218.5,202],["Q",222,198,227,194],["Q",232,190,235,187.5],["Q",238,185,242,181.5],["Q",246,178,250,174.5],["Q",254,171,258.5,166.5],["Q",263,162,266,159.5],["Q",269,157,272,154.5],["Q",275,152,276.5,150.5],["Q",278,149,281,147],["Q",284,145,287.5,143],["Q",291,141,294,139.5],["Q",297,138,301,136],["Q",305,134,310,131.5],["Q",315,129,320,127],["Q",325,125,330,123.5],["Q",335,122,341.5,120.5],["Q",348,119,353,118.5],["Q",358,118,360.5,117.5],["Q",363,117,371.5,116.5],["Q",380,116,383.5,115.5],["Q",387,115,396,114],["Q",405,113,413,113],["Q",421,113,427.5,113],["Q",434,113,442.5,113],["Q",451,113,459,113],["Q",467,113,474,113],["Q",481,113,485,113.5],["Q",489,114,495.5,115.5],["Q",502,117,506.5,118.5],["Q",511,120,515.5,121.5],["Q",520,123,523.5,124.5],["Q",527,126,529.5,127.5],["Q",532,129,535,130.5],["Q",538,132,540,133],["Q",542,134,543,135.5],["Q",544,137,545,138],["Q",546,139,547,140.5],["Q",548,142,548.5,142],["Q",549,142,549,142.5],["L",549,143]],"pathOffset":{"x":350.75,"y":191.5}},{"type":"path","originX":"center","originY":"center","left":155.75,"top":88.5,"width":190.5,"height":85,"fill":null,"stroke":"rgb(0, 0, 0)","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",60.5,79],["Q",60.5,79,61,79],["Q",61.5,79,61.25,78.5],["Q",61,78,64.5,76.5],["Q",68,75,73,73],["Q",78,71,82.5,68.5],["Q",87,66,94,64],["Q",101,62,107.5,59.5],["Q",114,57,120,55.5],["Q",126,54,134,52],["Q",142,50,148.5,49],["Q",155,48,167.5,47],["Q",180,46,185.5,46],["Q",191,46,196.5,46],["Q",202,46,204.5,46],["Q",207,46,208.5,48],["Q",210,50,211.5,52.5],["Q",213,55,215.5,58.5],["Q",218,62,222,67.5],["Q",226,73,229.5,78],["Q",233,83,236,88],["Q",239,93,240.5,97],["Q",242,101,243,102.5],["Q",244,104,244.5,105],["Q",245,106,245.5,108],["Q",246,110,246.5,111.5],["Q",247,113,247,115.5],["Q",247,118,248,121],["Q",249,124,249.5,126],["Q",250,128,250,129],["Q",250,130,250,130.5],["Q",250,131,250.5,131],["L",251,131]],"pathOffset":{"x":155.75,"y":88.5}},{"type":"path","originX":"center","originY":"center","left":333.25,"top":77.5,"width":119.5,"height":37,"fill":null,"stroke":"rgb(0, 0, 0)","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",273.5,96],["Q",273.5,96,274,96],["Q",274.5,96,274.25,95],["Q",274,94,274.5,93.5],["Q",275,93,277,91],["Q",279,89,281,86.5],["Q",283,84,286,82],["Q",289,80,290,79],["Q",291,78,293,76.5],["Q",295,75,297.5,73.5],["Q",300,72,302.5,70],["Q",305,68,307.5,67],["Q",310,66,315,64.5],["Q",320,63,324.5,61.5],["Q",329,60,334,59.5],["Q",339,59,342,59],["Q",345,59,348.5,59],["Q",352,59,354.5,59],["Q",357,59,359,59.5],["Q",361,60,364,61.5],["Q",367,63,369.5,64],["Q",372,65,375.5,65.5],["Q",379,66,381,67.5],["Q",383,69,384.5,69.5],["Q",386,70,387,71],["Q",388,72,389,72.5],["Q",390,73,390.5,73.5],["Q",391,74,391.5,74],["Q",392,74,392.5,74.5],["Q",393,75,393,75],["L",393,75]],"pathOffset":{"x":333.25,"y":77.5}},{"type":"path","originX":"center","originY":"center","left":545.75,"top":72.5,"width":192.5,"height":25,"fill":null,"stroke":"rgb(0, 0, 0)","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",449.5,72],["Q",449.5,72,450,72],["Q",450.5,72,450.75,72],["Q",451,72,454.5,71.5],["Q",458,71,463,70],["Q",468,69,473,67.5],["Q",478,66,485,64],["Q",492,62,499.5,61],["Q",507,60,516.5,60],["Q",526,60,535.5,60],["Q",545,60,553.5,60],["Q",562,60,568.5,60],["Q",575,60,581,61],["Q",587,62,592.5,63.5],["Q",598,65,603.5,66],["Q",609,67,613.5,68.5],["Q",618,70,622.5,71.5],["Q",627,73,630,74.5],["Q",633,76,635,76.5],["Q",637,77,637.5,78.5],["Q",638,80,638.5,80.5],["Q",639,81,639.5,82],["Q",640,83,640.5,83.5],["Q",641,84,641.5,84.5],["Q",642,85,642,85],["L",642,85]],"pathOffset":{"x":545.75,"y":72.5}},{"type":"path","originX":"center","originY":"center","left":659,"top":228.5,"width":186,"height":195,"fill":null,"stroke":"rgb(0, 0, 0)","strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",674.5,131],["Q",674.5,131,675,131],["Q",675.5,131,675.75,131],["Q",676,131,677.5,132.5],["Q",679,134,683,139.5],["Q",687,145,693,152.5],["Q",699,160,704.5,171],["Q",710,182,715,192],["Q",720,202,723.5,211],["Q",727,220,729,224.5],["Q",731,229,734,234.5],["Q",737,240,740,246],["Q",743,252,745,256.5],["Q",747,261,748,264],["Q",749,267,750.5,272.5],["Q",752,278,752,282.5],["Q",752,287,752,292],["Q",752,297,752,300],["Q",752,303,750,306.5],["Q",748,310,743,312.5],["Q",738,315,728.5,317.5],["Q",719,320,699.5,322.5],["Q",680,325,665.5,325.5],["Q",651,326,640.5,326],["Q",630,326,619.5,326],["Q",609,326,603.5,326],["Q",598,326,593.5,326],["Q",589,326,584.5,325.5],["Q",580,325,576.5,322.5],["Q",573,320,570.5,317],["Q",568,314,567,312],["Q",566,310,566,307.5],["Q",566,305,566,304],["Q",566,303,566,302.5],["Q",566,302,566,302],["Q",566,302,566,301],["Q",566,300,566.5,300],["L",567,300]],"pathOffset":{"x":659,"y":228.5}}],"background":""};


canvas.loadFromJSON( pathy, canvas.renderAll.bind(canvas) );


// start drawing mode
canvas.on('path:created', function(options) {
  console.log( JSON.stringify(canvas) );
  socket.emit('draw', canvas);
  // console.log(options.e.clientX, options.e.clientY);
});