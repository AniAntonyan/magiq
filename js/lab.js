
function drop(){
    var inp = document.getElementById("inp").value;
    if(inp=="flowers"){
        document.getElementById("flow_1").style.boxShadow="5px 5px 5px black";
        document.getElementById("flow_2").style.boxShadow="5px 5px 5px black";
        document.getElementById("flow_3").style.boxShadow="5px 5px 5px black";
        document.getElementById("flow_4").style.boxShadow="5px 5px 5px black";
        document.getElementById("hidden").style.display="block";
    }
}

function drop_1(){
    document.getElementById("flow_1").style.display="none";
    document.getElementById("flow_2").style.display="none";
    document.getElementById("flow_3").style.display="none";
    document.getElementById("flow_4").style.display="none";
    document.getElementById("flow_5").style.display="block";
    document.getElementById("flow_6").style.display="block";
    document.getElementById("flow_7").style.display="block";
    document.getElementById("flow_8").style.display="block";
}
