var indimg=1;
scorimg(indimg);

function plusDivs(btn){
  scorimg(indimg+=btn)
}

function scorimg(n){
  var i;
  var x=document.getElementsByClassName("mySlides");

  if(n>x.length){
    indimg=1
  }
  if(n<1){
    indimg=x.length;
  }

  for(i=0;i<x.length;i++){
    x[i].style.display="none";
  }
  x[indimg-1].style.display="block";
}
