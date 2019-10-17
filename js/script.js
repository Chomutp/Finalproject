//Change background color
//document.addEventListener("DOMContentLoaded", function(event) {
    //let bg1 = document.getElementById('bg1');
   // let bg2 = document.getElementById('bg2');

    //bg1.addEventListener('click', function() {
    //    bgchange.style.backgroundColor = "#535555";
    //});

    //bg2.addEventListener('click', function() {
      //  bgchange.style.backgroundColor = "#FFF";
    //});
//});

function bgchange(){
    document.body.style.backgroundColor = "#535555";
  }
  
  function bgback(){
    document.body.style.backgroundColor = "white";
  }



//Change Name
//   function change(){
//   let nameChange = document.getElementById("nameChange")
//   nameChange.innerHTML = "FFFFF DDDDD"
// }

// function back(){
//   let nameChange = document.getElementById("nameChange")
//   nameChange.innerHTML = "UTHUMPORN NAIKORN"
// }
function namechange(){
    document.getElementById("nameChange")
    nameChange.innerHTML = "Mary Had a Little Lamb"
  }
  
  function nameback(){
    document.getElementById("nameChange")
    nameChange.innerHTML = "UTHUMPORN NAIKORN"
  }

  function little(){
    let littlt = document.getElementById("littleLamp")
    littleLamp.innerHTML = "Little Lamb, Little Lamb"
  }
  
  function basic(){
    let basic = document.getElementById("littleLamp")
    littleLamp.innerHTML = "FOOD PROCESS ENGINEER"
  }





//Add-delete Skill
function addskill() {
    let li = document.createElement("li");
    li.setAttribute("id", "deli");
    li.setAttribute("class", "deli");
    let inputValue = document.getElementById("inputskill").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
   document.getElementById("myskill").appendChild(li);  
   document.getElementById("inputskill").value = " ";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
            div.style.display = "none";
          
        }
    }
}


function deleteskill() {
    const deletelist = document.getElementsByClassName('deli');
    const n = deletelist.length;
    deletelist[n - 1].remove();
}

