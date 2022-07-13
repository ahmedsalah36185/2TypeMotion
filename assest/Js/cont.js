// get vars 'buttons'

var mybtn_a = document.getElementById("btn_a");
var mybtn_b = document.getElementById("btn_b");

// get vars 'master div'
var switch_me = document.getElementById("switcher");
var f1 = document.getElementById("flow1"),
    f2 = document.getElementById("flow2"),
    f3 = document.getElementById("flow3"),
    f4 = document.getElementById("flow4");
// some label
var h1label = document.getElementById("label_1");


    mybtn_a.classList.add("selected");

mybtn_a.onclick = function(){
    
    mybtn_b.classList.remove("selected");
    mybtn_a.classList.add("selected");

    h1label.innerHTML="Motion 'A'";

    if(mybtn_a.classList.contains("selected")){

        switch_me.classList.remove("flow_container");
        switch_me.classList.add("nd_flow_container")
    
        f1.classList.remove("flow1");
        f1.classList.add("ndflow1");

        f2.classList.remove("flow2");
        f2.classList.add("ndflow2");

        f3.classList.remove("flow3");
        f3.classList.add("ndflow3");

        f4.classList.remove("flow4");
        f4.classList.add("ndflow4");
    }
    
}
mybtn_b.onclick = function(){

    mybtn_a.classList.remove("selected");
    mybtn_b.classList.add("selected");
    
    h1label.innerHTML="Motion 'B'";

    if(mybtn_b.classList.contains("selected")){
        switch_me.classList.remove("nd_flow_container");
        switch_me.classList.add("flow_container")
    
        f1.classList.remove("ndflow1");
        f1.classList.add("flow1");

        f2.classList.remove("ndflow2");
        f2.classList.add("flow2");

        f3.classList.remove("ndflow3");
        f3.classList.add("flow3");

        f4.classList.remove("ndflow4");
        f4.classList.add("flow4");   
    } 
}
