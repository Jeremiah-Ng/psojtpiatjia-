function webcam(){
 document.getElementById("complicated").innerHTML="Webcam View - "
    document.getElementById("camera").style.height="350px";
        document.getElementById("camera").style.visibility="visible";
    document.getElementById("camera1").style.visibility="hidden";
    document.getElementById("camera1").style.height="0px";
}
function files(){
    document.getElementById("complicated").innerHTML="File Upload - "
    document.getElementById("camera1").style.visibility="visible";
        document.getElementById("camera1").style.height="350px";
        document.getElementById("camera").style.height="0px";
        document.getElementById("camera").style.visibility="hidden";
}
function disapear(){
    document.getElementById("disappear").innerHTML=""
}