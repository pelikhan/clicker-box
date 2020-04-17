input.buttonD4.onEvent(ButtonEvent.Click, function () {
    clik = !(clik)
    if (clik) {
    	
    } else {
    	
    }
})
let clik = false
clik = false
forever(function () {
    if (clik) {
        pixel.setColor(0x007fff)
        pins.A1.digitalWrite(true)
        mouse.setButton(MouseButton.Left, true)
        pause(60)
        mouse.setButton(MouseButton.Left, false)
        pins.A1.digitalWrite(false)
        pixel.setColor(0x000000)
    } else {
        pixel.setColor(0xff0000)
        pins.A1.digitalWrite(true)
    }
    pause(100)
})
forever(function () {
    if (clik) {
        keyboard.type("w")
    }
    pause(300000)
})
