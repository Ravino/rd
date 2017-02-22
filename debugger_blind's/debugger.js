var error_sound=new Audio("./debugger_blind's/sound/error.mp3");
var info_sound=new Audio("./debugger_blind's/sound/info.mp3");
var warn_sound=new Audio("./debugger_blind's/sound/warn.mp3");


document.querySelector("body").
insertAdjacentHTML("afterBegin", "<table> <tr> <td> <input type='button' id='debugger-button' value='open debugger' /> </td> </tr> <tr id='debugger_tr' hidden> <td> <h2>log</h2> <div id='debugger-log'></div> </td> <td> <h2>error</h2> <div id='debugger-error'></div> </td> <td> <h2>warn</h2> <div id='debugger-warn'></div> </td> <td> <h2>info</h2> <div id='debugger-info'></div> </td> </tr> <tr> <td> <h2> Your application are below</h2> </td> </tr> </table>");


var debugger_status=false;
var debugger_button=document.querySelector("#debugger-button");

debugger_button.onclick=function(){

if(debugger_status==false){
debugger_button.value="close debugger";
debugger_tr.removeAttribute("hidden");
debugger_status="true";
}

else{
debugger_button.value="open debugger";
debugger_tr.setAttribute("hidden", "");
debugger_status=false;
}
};


var debugger_log=document.querySelector("#debugger-log");
var debugger_error=document.querySelector("#debugger-error");
var debugger_warn=document.querySelector("#debugger-warn");
var debugger_info=document.querySelector("#debugger-info");


window.onerror=function(debugger_event_error_type, debugger_event_error_url, debugger_event_error_line){
debugger_error.insertAdjacentHTML("afterBegin", "<span>On line "+debugger_event_error_line+" "+debugger_event_error_type+" "+debugger_event_error_url+"</span>");

error_sound.play();
};


console.log=function(){
if(arguments[0]){
for(var i=0; i!=arguments.length; i++){
debugger_log.insertAdjacentHTML("afterBegin", "<br><span>"+arguments[i]+"</span>");
}
}
};


console.error=function(){
if(arguments[0]){
for(var i=0; i!=arguments.length; i++){
debugger_error.insertAdjacentHTML("afterBegin", "<br><span>"+arguments[i]+"</span>");
}
error_sound.play();
}
};


console.warn=function(){
if(arguments[0]){
for(var i=0; i!=arguments.length; i++){
debugger_warn.insertAdjacentHTML("afterBegin", "<br><span>"+arguments[i]+"</span>");
}
warn_sound.play();
}
};


console.info=function(){
if(arguments[0]){
for(var i=0; i!=arguments.length; i++){
debugger_info.insertAdjacentHTML("afterBegin", "<br><span>"+arguments[i]+"</span>");
}
info_sound.play();
}
};

