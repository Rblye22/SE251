/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var heading = document.querySelector('#options h2')
var sides = document.querySelector('#options .sides')

heading.addEventListener('click', function () {
    sides.classList.toggle('hidden')
})

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 
-----------*/
var fillInputs = document.querySelectorAll('.fill')
var outputs = document.querySelectorAll('.fill + .output')

for (var i = 0; i < fillInputs.length; i++) {
  fillInputs[i].value = player[i].fill
  outputs[i].innerHTML = player[i].fill

  fillInputs[i].addEventListener('input', function (e) {
    var index = Array.prototype.indexOf.call(fillInputs, e.target)
    var color = e.target.value

    player[index].fill = color
    pad[index].fill = color
    outputs[index].innerHTML = color
  })
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/