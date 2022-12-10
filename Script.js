


let mylist = document.getElementsByTagName("li")

var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  mylist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var not = this.parentElement;
    not.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var newLI = document.createTextNode(inputValue);
  li.appendChild(newLI);
  if (inputValue === '') {
    alert("Daxil etmediniz");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

   span = document.createElement("SPAN");
   text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
       not = this.parentElement;
      not.style.display = "none";
    }
  }
}

function myFunc(ul){
 var ul=document.getElementById("myUL");
 Array.from(ul.getElementsByTagName("LI"))
 .sort((a,b)=>a.textContent.localeCompare(b.textContent))
 .forEach(li=>ul.appendChild(li))
  
 }
 function myreverse(ul){
  var ul=document.getElementById("myUL");
  Array.from(ul.getElementsByTagName("LI"))
  .reverse((a,b)=>a.textContent.localeCompare(b.textContent))
  .forEach(li=>ul.appendChild(li)
  )
   
  }
  myFunc("myUL");
 myreverse("myUL");
 






