function Chronometre () {
    Entree = ""
    Temps = 15
    while (StopChronometre == false && Temps > 0) {
        basic.showNumber(Temps)
        basic.pause(1000)
        Temps += 0 - 1
    }
    if (StopChronometre == false && Entree != Motdepasse && Temps == 0) {
        basic.showIcon(IconNames.Angry)
        bluetooth.uartWriteLine("ALERTE !!")
    }
}
input.onButtonPressed(Button.A, function () {
    Entree = "" + Entree + "A"
})
function Verifier () {
    if (StopChronometre == false && input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.No)
        Chronometre()
    } else if (StopChronometre == false && input.magneticForce(Dimension.Strength) > 200) {
        basic.showIcon(IconNames.Yes)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (Entree == Motdepasse) {
        StopChronometre = true
        Entree = ""
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    } else {
        Entree = ""
        StopChronometre = true
        while (StopChronometre == true) {
            basic.showIcon(IconNames.Angry)
            bluetooth.uartWriteLine("ALERTE !!")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Entree = "" + Entree + "B"
})
function Demarrage () {
    StopChronometre = false
    Motdepasse = "ABBABAA"
    Entree = ""
    bluetooth.startUartService()
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # . #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
}
let Motdepasse = ""
let StopChronometre = false
let Temps = 0
let Entree = ""
Demarrage()
basic.forever(function () {
    Verifier()
})
