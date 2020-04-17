input.buttonD4.onEvent(ButtonEvent.Click, function () {
    clik = !(clik)
})
let clik = false
let MINUTE = 60000
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
    pause(80)
})
forever(function () {
    if (clik) {
        keyboard.type("w")
        keyboard.type("s")
    }
    pause(5 * MINUTE)
})
forever(function () {
    if (clik) {
        keyboard.type(" ")
    }
    pause(2 * MINUTE)
})
