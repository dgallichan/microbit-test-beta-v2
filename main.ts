datalogger.onLogFull(function () {
    dologdata = 0
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    dologdata = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    dologdata = 0
})
let dologdata = 0
dologdata = 0
basic.showIcon(IconNames.House)
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    if (dologdata == 1) {
        datalogger.logData([
        datalogger.createCV("a.x", input.acceleration(Dimension.X)),
        datalogger.createCV("a.y", input.acceleration(Dimension.Y)),
        datalogger.createCV("a.z", input.acceleration(Dimension.Z))
        ])
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
