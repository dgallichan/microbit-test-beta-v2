datalogger.onLogFull(function () {
    dologdata = false
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.A, function () {
    dologdata = !(dologdata)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    datalogger.deleteLog()
})
let dologdata = false
dologdata = false
datalogger.setColumns(["a.x", "a.y", "a.z"])
basic.showIcon(IconNames.House)
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    if (dologdata) {
        datalogger.logData([
        datalogger.createCV("a.x", input.acceleration(Dimension.X)),
        datalogger.createCV("a.y", input.acceleration(Dimension.Y)),
        datalogger.createCV("a.z", input.acceleration(Dimension.Z))
        ])
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
