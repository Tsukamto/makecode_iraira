let start = 0
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
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
        basic.showString("CLEAR")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    start = 0
})
input.onPinPressed(TouchPin.P1, function () {
    if (start >= 1) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
