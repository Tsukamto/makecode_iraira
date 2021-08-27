input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
    start += 1
    basic.showString("START")
})
input.onPinPressed(TouchPin.P2, function () {
    if (start >= 1) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    start = 0
    music.stopAllSounds()
})
input.onPinPressed(TouchPin.P1, function () {
    if (start >= 1) {
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    }
})
let start = 0
basic.clearScreen()
start = 0
