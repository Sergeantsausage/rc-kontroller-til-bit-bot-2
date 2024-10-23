input.onButtonPressed(Button.A, function () {
    knapp_A_sleppes = 1
    if (input.buttonIsPressed(Button.A) == false) {
        knapp_A_sleppes = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    knapp_AB_sleppes = 1
    if (input.buttonIsPressed(Button.AB) == false) {
        knapp_AB_sleppes = 0
    }
})
input.onButtonPressed(Button.B, function () {
    knapp_B_sleppes = 1
    if (input.buttonIsPressed(Button.B) == false) {
        knapp_B_sleppes = 0
    }
})
let knapp_AB_sleppes = 0
let knapp_A_sleppes = 0
let knapp_B_sleppes = 0
radio.setGroup(12)
knapp_B_sleppes = 0
basic.forever(function () {
    if (knapp_B_sleppes == 1 && input.buttonIsPressed(Button.B)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (knapp_A_sleppes == 1 && input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (knapp_AB_sleppes == 1 && input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
