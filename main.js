Webcam.set({
width:450,
height:400,
image_format: "png",
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='image_captured' src=" + data_uri + ">";
    });
}
console.log('ml5 version:', ml5.version);
classifier =  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/R8-zfh6Wy/model.json",modelLoaded);

function modelLoaded()
{
 console.log("model loaded!");    
}

function check()
{
 img = document.getElementById("image_captured").value;
 classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}