/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var heading = document.querySelector('#options h2')
var sides = document.getElementById('sides') || document.querySelector('#options .sides')

if (heading && sides) {
  heading.addEventListener('click', function () {
    sides.classList.toggle('hidden')
  })
}
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
  fillInputs[i].addEventListener('input', function () {
    var color = this.value
    if (this === fillInputs[0]) {
      player[0].fill = color
      pad[0].fill = color
      outputs[0].innerHTML = color
    } else if (this === fillInputs[1]) {
      player[1].fill = color
      pad[1].fill = color
      outputs[1].innerHTML = color
    }
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
var upInputs = document.querySelectorAll('.u')
var upOutputs = document.querySelectorAll('.u + .output')

for (var i = 0; i < upInputs.length; i++) {
  upInputs[i].value = player[i].keys.u
  upOutputs[i].innerHTML = player[i].keys.u

  upInputs[i].addEventListener('focus', function () {
    currentState = 'pause'
  })
  upInputs[i].addEventListener('keydown', function (e) {
    e.preventDefault()
    var keyName = e.key
    if (this === upInputs[0]) {
      upInputs[0].value = keyName
      player[0].keys.u = keyName
      upOutputs[0].innerHTML = keyName
    } else if (this === upInputs[1]) {
      upInputs[1].value = keyName
      player[1].keys.u = keyName
      upOutputs[1].innerHTML = keyName
    }
  })
}
// stroke inputs
var strokeInputs = document.querySelectorAll('.stroke')
var strokeOutputs = document.querySelectorAll('.stroke + .output')

for (var i = 0; i < strokeInputs.length; i++) {
  strokeInputs[i].value = player[i].stroke
  strokeOutputs[i].innerHTML = player[i].stroke
  strokeInputs[i].addEventListener('input', function () {
    var color = this.value
    if (this === strokeInputs[0]) {
      player[0].stroke = color
      pad[0].stroke = color
      strokeOutputs[0].innerHTML = color
    } else if (this === strokeInputs[1]) {
      player[1].stroke = color
      pad[1].stroke = color
      strokeOutputs[1].innerHTML = color
    }
  })
}
// down inputs
var downInputs = document.querySelectorAll('.d')
var downOutputs = document.querySelectorAll('.d + .output')

for (var i = 0; i < downInputs.length; i++) {
  downInputs[i].value = player[i].keys.d
  downOutputs[i].innerHTML = player[i].keys.d

  downInputs[i].addEventListener('focus', function () {
    currentState = 'pause'
  })
  downInputs[i].addEventListener('keydown', function (e) {
    e.preventDefault()
    var keyName = e.key
    if (this === downInputs[0]) {
      player[0].keys.d = keyName
      downInputs[0].value = keyName
      downOutputs[0].innerHTML = keyName
    } else if (this === downInputs[1]) {
      player[1].keys.d = keyName
      downInputs[1].value = keyName
      downOutputs[1].innerHTML = keyName
    }
  })
}
// straight inputs
var straightInputs = document.querySelectorAll('.s')
var straightOutputs = document.querySelectorAll('.s + .output')

for (var i = 0; i < straightInputs.length; i++) {
  straightInputs[i].value = player[i].keys.s
  straightOutputs[i].innerHTML = player[i].keys.s

  straightInputs[i].addEventListener('focus', function () {
    currentState = 'pause'
  })
  straightInputs[i].addEventListener('keydown', function (e) {
    e.preventDefault()
    var keyName = e.key
    if (this === straightInputs[0]) {
      player[0].keys.s = keyName
      straightInputs[0].value = keyName
      straightOutputs[0].innerHTML = keyName
    } else if (this === straightInputs[1]) {
      player[1].keys.s = keyName
      straightInputs[1].value = keyName
      straightOutputs[1].innerHTML = keyName
    }
  })
}
// theme select
var themeInput = document.querySelector('.theme')
var themeOutput = document.querySelector('.theme + .output')

if (themeInput) {
  if (themeInput.value === 'light') {
    document.body.style.backgroundColor = 'white'
    document.querySelector('main').style.color = 'black'
    themeOutput.innerHTML = 'Light Mode'
  } else {
    document.body.style.backgroundColor = 'black'
    document.querySelector('main').style.color = 'white'
    themeOutput.innerHTML = 'Dark Mode'
  }
  themeInput.addEventListener('change', function () {
    if (this.value === 'light') {
      document.body.style.backgroundColor = 'grey'
      document.querySelector('main').style.color = 'black'
      themeOutput.innerHTML = 'Light Mode'
    } else {
      document.body.style.backgroundColor = 'black'
      document.querySelector('main').style.color = 'white'
      themeOutput.innerHTML = 'Dark Mode'
    }
  })
}