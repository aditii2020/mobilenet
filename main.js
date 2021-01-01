function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  canvas.position(730,300)
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , modelLoaded)
}

function modelLoaded(){
  console.log("ModelLoaded!")
}

function draw(){
  image(video ,0, 0, 300 ,300);
  classifier.classify(video ,gotResults );
}

function gotResults(error,results){
if(error){
  console.error(error);
}
else{
  document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}

