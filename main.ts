input.buttonD12.onEvent(ButtonEvent.Click, function () {
    clik = !(clik)
    if (clik) {
        pixel.setColor(0x007fff)
    } else {
        pixel.setColor(0xff0000)
    }
})
let clik = false
clik = false
forever(function () {
    if (clik) {
        pins.A1.digitalWrite(true)
        pins.D13.digitalWrite(true)
        mouse.setButton(MouseButton.Left, true)
        pause(60)
        mouse.setButton(MouseButton.Left, false)
        pins.A1.digitalWrite(false)
        pins.D13.digitalWrite(false)
    }
    pause(100)
})
forever(function () {
    if (clik) {
        keyboard.type("w")
    }
    pause(300000)
})
