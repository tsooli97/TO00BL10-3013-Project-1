var dupeList = [];

for (var i = 0; i < localStorage.length; i++){
  var x = localStorage.getItem(localStorage.key(i));
  var a = document.createElement("li");
  var b = document.createTextNode(x);
  a.appendChild(b);
  document.getElementById("todolist").appendChild(a);

 
}



var a1 = document.getElementById("newList");
var a2 = document.getElementById("todolist");
var a3 = document.getElementById("uniquelist");

a1.addEventListener('click', function(event) {
  if (event.target.tagName === 'li') {
    event.target.parentNode.removeChild(event.target);
  }
}, false);
  
  var listItems = document.getElementById("todolist").getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        let text = document.getElementById("newList").innerHTML;
        var a = document.createElement("li");
        var b = document.createTextNode(this.innerHTML);


        a.appendChild(b);  
        a1.appendChild(a);
        
        if (!(dupeList.includes(a.innerHTML))) {
          var c = document.createElement("li");
          var d = document.createTextNode(this.innerHTML);
          c.appendChild(d);

          dupeList.push(a.innerHTML);
          a3.appendChild(c);
          
        } else {

        }


       
      
      
    });
  
  }



function clearSelected() {
  var x = document.getElementById("newList");
  while (x.hasChildNodes()) {

    x.removeChild(x.firstChild);
    
  }
  location.reload();
}




function addToList() {
    var x = document.getElementById("To-Do").value;
    var a = document.createElement("li");
    var b = document.createTextNode(x);

    if (x !== null && x.length > 0) {
        a.appendChild(b);
        document.getElementById("todolist").appendChild(a);
        document.getElementById("errorfield").innerHTML = "";
        document.getElementById("To-Do").style.borderColor ="black";
        addToLocal(x);
        location.reload();
        
    } else {
        document.getElementById("To-Do").style.borderColor ="red";
        document.getElementById("errorfield").innerHTML = "<b>You need to enter something to the list in order to submit!</b>";
    }
    
    
    document.getElementById("To-Do").value = null;
    return false;

}

function addToLocal(element) {
  var today = new Date();
  var now = today.getTime();

  today = now;
  localStorage.setItem(today,element);

}



function deleteDone() {
  var x = document.getElementById("newList");
  while (x.hasChildNodes()) {
    removeFromLocalStorage(x.firstChild.innerHTML);
    x.removeChild(x.firstChild);
    
  }
  location.reload();
}

function removeFromLocalStorage(e) {
  let i = localStorage.length;
  while (i-- > 0) {
      let key = localStorage.key(i);
      if (localStorage.getItem(key) === e) {
          localStorage.removeItem(key);
      }
  }
}

