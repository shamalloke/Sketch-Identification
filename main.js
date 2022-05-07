function setup(){
  canvas= createCanvas(300,300);
    background("#000");
    canvas.center();
    synth=window.speechSynthesis;
    canvas.mouseReleased(simplify_canvas);
}

function clearCanvas(){
    background("#000");
}

function preload(){
  classifier=ml5.imageClassifier("DoodleNet");

}

function simplify_canvas(){
  classifier.classify(canvas,gotResult);
}

function gotResult(error,result){
  if (error) {
    (console.error(error));
  }
  else {
    console.log(results);
  document.getElementById("Label").innerHTML=" Label "+ results[0].label;
  document.getElementById("Confidence").innerHTML=" Confidence "+ Math.round(results[0].label * 100) +  " %";
  utterThis= new SpeechSynthesisUtterance(results[0].label);
  synth.speak(utterThis);
  }

}

function draw(){
  strokeweight(10);
  stroke("white");
  if(MouseisPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}