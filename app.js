'use strict'

var display = false;


// Apply today string to the selected element
function setDate() {
    display = !display
    console.log(display)
    let selectElement = document.getElementById('date')
    if(display)
    {
        let today = new Date()
        let formatDate = today.toDateString()
        console.log(formatDate)
        selectElement.innerHTML = formatDate
    }
    else if(!display)
    {
        selectElement.innerHTML = "";
    }
}