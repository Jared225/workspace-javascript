//event click
function changestyle(e){
    // this ---> represent the element
    // e ---> event triggered
    e.preventDefault();
    // if the class is answer, change to answer selected
    // else change back to answer
    var currentclass = this.getAttribute('class');
    if(currentclass=="answer"){
        this.setAttribute('class',"answer selected");
        this.children[0].children[0].checked=true;
     

    }else{
        this.setAttribute('class',"answer");
    }
    //scale could be rotate(0deg);
    this.animate([{transform:'scale(5,4)'},{transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});
    var staterotation="rotate(360deg)";
    //translatex
    //scale(x,y) 
    //setInterval(Call ajunction,duration of time) = setInterval(dosth,5000);
   
}



//change the style of the check when click
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click',changestyle);
}