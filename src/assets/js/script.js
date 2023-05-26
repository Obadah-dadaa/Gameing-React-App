
function myFunction1() {
  alert('The Lecture is canceled');
}


function myFunction2() {
    alert('The lecture has been postponed');
  }



  function myFunction3() {
    alert('The lecture was given');
  }



  function myFunction4() {
    alert('The Lecture is canceled');
  }


document.getElementById("eff").addEventListener("mouseover", mouseOver);
document.getElementById("eff").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("eff").style.color = "gray";
  }
  
  function mouseOut() {
    document.getElementById("eff").style.color = "white";
  }
/////////////////////////////////////////////////////////


document.getElementById("demo").addEventListener("mouseover", mouseOverr);
document.getElementById("demo").addEventListener("mouseout", mouseOutt);


function mouseOverr() {
    document.getElementById("demo").style.color = "gray";
  }
  
  function mouseOutt() {
    document.getElementById("demo").style.color = "white";
  }

//////////////////////////////////////////
  document.getElementById("dem").addEventListener("mouseover", mouseOverrr);
document.getElementById("dem").addEventListener("mouseout", mouseOuttt);


function mouseOverrr() {
    document.getElementById("dem").style.color = "gray";
  }
  
  function mouseOuttt() {
    document.getElementById("dem").style.color = "white";
  }

  function hov() {
    var e = document.getElementById('hover');
    e.style.rotate(22);
 }