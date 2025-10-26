/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var heading = document.querySelector(`#options h2`)
var sides = document.querySelector(`#options .sides`)

if (heading && sides) {
  heading.addEventListener(`click`, function () {
    sides.classList.toggle(`hidden`)
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
var p1Panel = document.querySelectorAll(`#options .op`)[0]
var p2Panel = document.querySelectorAll(`#options .op`)[1]

if (p1Panel) {
  var p1Fill = p1Panel.querySelector(`input.fill`)
  var p1FillOut = p1Fill ? p1Fill.nextElementSibling : null
  if (p1Fill) {
    if (typeof player !== `undefined` && player[0] && player[0].fill) {
      p1Fill.value = player[0].fill
      if (p1FillOut) p1FillOut.textContent = String(player[0].fill).toUpperCase()
    }
    p1Fill.addEventListener(`input`, function () {
      var v = p1Fill.value
      if (typeof player !== `undefined` && player[0]) player[0].fill = v      // Change the player's fill
      if (typeof pad !== `undefined` && pad[0]) pad[0].fill = v               // Change the pad's fill
      if (p1FillOut) p1FillOut.textContent = String(v).toUpperCase()          // Show hex in output
    })
  }
}
if (p2Panel) {
  var p2Fill = p2Panel.querySelector(`input.fill`)
  var p2FillOut = p2Fill ? p2Fill.nextElementSibling : null
  if (p2Fill) {
    if (typeof player !== `undefined` && player[1] && player[1].fill) {
      p2Fill.value = player[1].fill
      if (p2FillOut) p2FillOut.textContent = String(player[1].fill).toUpperCase()
    }
    p2Fill.addEventListener(`input`, function () {
      var v = p2Fill.value
      if (typeof player !== `undefined` && player[1]) player[1].fill = v
      if (typeof pad !== `undefined` && pad[1]) pad[1].fill = v
      if (p2FillOut) p2FillOut.textContent = String(v).toUpperCase()
    })
  }
}
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
if (p1Panel && typeof player !== `undefined` && player[0]) {
  var p1U = p1Panel.querySelector(`input.u`)
  var p1UOut = p1U ? p1U.nextElementSibling : null
  var p1D = p1Panel.querySelector(`input.d`)
  var p1DOut = p1D ? p1D.nextElementSibling : null
  var p1S = p1Panel.querySelector(`input.s`)
  var p1SOut = p1S ? p1S.nextElementSibling : null

  if (p1U) {
    p1U.value = player[0].keys.u
    if (p1UOut) p1UOut.textContent = player[0].keys.u
    p1U.addEventListener(`keydown`, function (e) {
      e.preventDefault()
      player[0].keys.u = e.key                          // Change player's key
      p1U.value = e.key                                 // Display key name in input
      if (p1UOut) p1UOut.textContent = e.key            // Show key in output div
    })
  }
  if (p1D) {
    p1D.value = player[0].keys.d
    if (p1DOut) p1DOut.textContent = player[0].keys.d
    p1D.addEventListener(`keydown`, function (e) {
      e.preventDefault()
      player[0].keys.d = e.key
      p1D.value = e.key
      if (p1DOut) p1DOut.textContent = e.key
    })
  }
  if (p1S) {
    p1S.value = player[0].keys.s
    if (p1SOut) p1SOut.textContent = player[0].keys.s
    p1S.addEventListener(`keydown`, function (e) {
      e.preventDefault()
      player[0].keys.s = e.key
      p1S.value = e.key
      if (p1SOut) p1SOut.textContent = e.key
    })
  }
}
if (p2Panel && typeof player !== `undefined` && player[1]) {
  var p2U = p2Panel.querySelector(`input.u`)
  var p2UOut = p2U ? p2U.nextElementSibling : null
  var p2D = p2Panel.querySelector(`input.d`)
  var p2DOut = p2D ? p2D.nextElementSibling : null
  var p2S = p2Panel.querySelector(`input.s`)
  var p2SOut = p2S ? p2S.nextElementSibling : null

  if (p2U) {
    p2U.value = player[1].keys.u
    if (p2UOut) p2UOut.textContent = player[1].keys.u
    p2U.addEventListener(`keydown`, function (e) {
      e.preventDefault()
      player[1].keys.u = e.key
      p2U.value = e.key
      if (p2UOut) p2UOut.textContent = e.key
    })
  }
  if (p2D) {
    p2D.value = player[1].keys.d
    if (p2DOut) p2DOut.textContent = player[1].keys.d
    p2D.addEventListener(`keydown`, function (e) {
      e.preventDefault()
      player[1].keys.d = e.key
      p2D.value = e.key
      if (p2DOut) p2DOut.textContent = e.key
    })
  }
  if (p2S) {
    p2S.value = player[1].keys.s
    if (p2SOut) p2SOut.textContent = player[1].keys.s
    p2S.addEventListener(`keydown`, function (e) {
      e.preventDefault()
      player[1].keys.s = e.key
      p2S.value = e.key
      if (p2SOut) p2SOut.textContent = e.key
    })
  }
}