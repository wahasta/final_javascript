function darkmode(){
    var full_client = document.getElementsByClassName("full-client")
    full_client[0].style.backgroundColor = "black";
    var judul = document.getElementsByClassName("judul")
    judul[0].style.color = "white";
    var paragraf = document.getElementsByClassName("paragraf")
    paragraf[0].style.color = "white";
    paragraf[1].style.color = "white";
    paragraf[2].style.color = "white"; 
  
    var partial_client = document.getElementsByClassName("partial-client")
    partial_client[0].style.backgroundColor = "black";
    judul[1].style.color = "white";
    paragraf[3].style.color = "white";
    paragraf[4].style.color = "white";
    paragraf[5].style.color = "white"; 

}


function lightmode(){
    var full_client = document.getElementsByClassName("full-client")
    full_client[0].style.backgroundColor = "white";
    var judul = document.getElementsByClassName("judul")
    judul[0].style.color = "black";
    var paragraf = document.getElementsByClassName("paragraf")
    paragraf[0].style.color = "black";
    paragraf[1].style.color = "black";
    paragraf[2].style.color = "black";
    
    var partial_client = document.getElementsByClassName("partial-client")
    partial_client[0].style.backgroundColor = "white";
    judul[1].style.color = "black";
    paragraf[3].style.color = "black";
    paragraf[4].style.color = "black";
    paragraf[5].style.color = "black";
}
