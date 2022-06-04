let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let Gree_count = 8
let Yellow_count = 2
let Red_count = 5
basic.forever(function () {
    if (Gree_count <= 8 && Gree_count != -1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showString("" + (Gree_count))
        Gree_count += -1
        basic.pause(1000)
    }
    if (Gree_count == -1 && Yellow_count != -1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.showString("" + (Yellow_count))
        Yellow_count += -1
        basic.pause(1000)
    }
    if (Yellow_count == -1 && Red_count != -1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("" + (Red_count))
        Red_count += -1
        basic.pause(1000)
    }
    if (Gree_count == -1 && (Red_count == -1 && Yellow_count == -1)) {
        Gree_count = 8
        Yellow_count = 2
        Red_count = 5
    }
})
