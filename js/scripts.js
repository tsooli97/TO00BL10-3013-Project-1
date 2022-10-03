function addToList() {
    var x = document.getElementById("To-Do").value;
    var a = document.createElement("li");
    var b = document.createTextNode(x);

    if (x !== null && x.length > 0) {
        a.appendChild(b);
        document.getElementById("todolist").appendChild(a);
        document.getElementById("errorfield").innerHTML = "";
        document.getElementById("To-Do").style.borderColor ="black";
    } else {
        document.getElementById("To-Do").style.borderColor ="red";
        document.getElementById("errorfield").innerHTML = "<b>You need to enter something to the list!</b>";
    }
    document.getElementById("To-Do").value = null;
    return false;

}


let deleteBtn = document.getElementsByClassName("btn");
// converting html collection to array, to use array methods
Array.prototype.slice.call(deleteBtn).forEach(function(item) {
  // iterate and add the event handler to it
  item.addEventListener("click", function(e) {
    e.target.parentNode.remove()
  });

})  


document.getElementById("todolist").addEventListener("click",turnGrey());

function turnGrey() {
    document.getElementById("todolist").style.backgroundColor = "grey";
}