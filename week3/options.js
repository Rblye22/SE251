/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var heading = document.querySelector('#options h2')
var sides = document.querySelector('#options .sides')

heading.addEventListener('click', function(){
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
var panels = document.querySelectorAll('#options .op')

for (var i = 0; i < 2; i++) {
    var p = panels[i]
    var colorInputs = p.querySelectorAll('.color')

    for (var j = 0; j < colorInputs.length; j++) {
        var input = colorInputs[j]
        var output = input.nextElementSibling
        input.pi = i
        if (input.classList.contains('fill')) {
            input.value = player[i].fill
            output.innerHTML = player[i].fill
            input.addEventListener('input', function(){
                var n = this.pi
                player[n].fill = this.value
                pad[n].fill = this.value
                this.nextElementSibling.innerHTML = this.value
            })
        }
        if (input.classList.contains('stroke')) {
            input.value = player[i].stroke
            output.innerHTML = player[i].stroke
            input.addEventListener('input', function(){
                var n = this.pi
                player[n].stroke = this.value
                pad[n].stroke = this.value
                this.nextElementSibling.innerHTML = this.value
            })
        }
    }
    var keyInputs = p.querySelectorAll('.key')
    for (var k = 0; k < keyInputs.length; k++) {
        var input2 = keyInputs[k]
        var output2 = input2.nextElementSibling
        input2.pi = i
        if (input2.classList.contains('u')) {
            input2.which = 'u'
            input2.value = player[i].keys.u
            output2.innerHTML = player[i].keys.u
        }
        if (input2.classList.contains('d')) {
            input2.which = 'd'
            input2.value = player[i].keys.d
            output2.innerHTML = player[i].keys.d
        }
        if (input2.classList.contains('s')) {
            input2.which = 's'
            input2.value = player[i].keys.s
            output2.innerHTML = player[i].keys.s
        }
        input2.addEventListener('focus', function(){
            currentState = 'pause'
        })
        input2.addEventListener('keydown', function(e){
            var n = this.pi
            var keyType = this.which
            player[n].keys[keyType] = e.key
            this.value = e.key
            this.nextElementSibling.innerHTML = e.key
        })
    }
  }
    // Theme select
var themeInput = document.querySelector('.theme')
var themeOutput = document.querySelector('.theme + .output')
if (themeInput) {
    if (themeInput.value === 'light') {
        document.body.style.backgroundColor = 'grey'
        document.querySelector('main').style.color = 'black'
        themeOutput.innerHTML = 'Light Mode'
    } else {
        document.body.style.backgroundColor = 'black'
        document.querySelector('main').style.color = 'white'
        themeOutput.innerHTML = 'Dark Mode'
    }
    themeInput.addEventListener('change', function(){
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