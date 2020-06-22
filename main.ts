input.onButtonPressed(Button.A, function () {
    if (!(led.point(triminosx - 1, triminosy - 2)) && !(led.point(triminosx - 1, triminosy - 1)) && (x == 0 && !(led.point(triminosx - 1, triminosy))) && (Fallen != 1 && triminosx != 0)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx, triminosy - 2)
        triminosx = triminosx - 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx, triminosy - 2, trans)
    }
    if (!(led.point(triminosx - 1, triminosy - 1)) && (x == 1 && !(led.point(triminosx - 1, triminosy))) && (Fallen != 1 && triminosx != 0)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx + 1, triminosy)
        triminosx = triminosx - 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx + 1, triminosy, trans)
    }
    if (!(led.point(triminosx - 1, triminosy - 1)) && (x == 2 && !(led.point(triminosx - 1, triminosy))) && (Fallen != 1 && triminosx != 0)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx + 1, triminosy - 1)
        triminosx = triminosx - 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx + 1, triminosy - 1, trans)
    }
    if (!(led.point(triminosx - 2, triminosy - 1)) && (x == 3 && !(led.point(triminosx - 1, triminosy))) && (Fallen != 1 && triminosx != 1)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx - 1, triminosy - 1)
        triminosx = triminosx - 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx - 1, triminosy - 1, trans)
    }
    if (!(led.point(triminosx - 1, triminosy - 1)) && (x == 4 && !(led.point(triminosx - 2, triminosy))) && (Fallen != 1 && triminosx != 1)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx - 1, triminosy)
        triminosx = triminosx - 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx - 1, triminosy, trans)
    }
    if (x == 5 && !(led.point(triminosx - 2, triminosy)) && (Fallen != 1 && triminosx != 1)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx + 1, triminosy)
        led.unplot(triminosx - 1, triminosy)
        triminosx = triminosx - 1
        led.plotBrightness(triminosx, triminosy, 255)
        led.plotBrightness(triminosx + 1, triminosy, 255)
        led.plotBrightness(triminosx - 1, triminosy, 255)
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(led.point(triminosx + 1, triminosy - 2)) && !(led.point(triminosx + 1, triminosy - 1)) && (x == 0 && !(led.point(triminosx + 1, triminosy))) && (Fallen != 1 && triminosx != 4)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx, triminosy - 2)
        triminosx = triminosx + 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx, triminosy - 2, trans)
    }
    if (!(led.point(triminosx + 1, triminosy - 1)) && (x == 1 && !(led.point(triminosx + 2, triminosy))) && (Fallen != 1 && triminosx != 3)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx + 1, triminosy)
        triminosx = triminosx + 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx + 1, triminosy, trans)
    }
    if (!(led.point(triminosx + 2, triminosy - 1)) && (x == 2 && !(led.point(triminosx + 1, triminosy))) && (Fallen != 1 && triminosx != 3)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx + 1, triminosy - 1)
        triminosx = triminosx + 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx + 1, triminosy - 1, trans)
    }
    if (!(led.point(triminosx + 1, triminosy - 1)) && (x == 3 && !(led.point(triminosx + 1, triminosy))) && (Fallen != 1 && triminosx != 4)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx - 1, triminosy - 1)
        triminosx = triminosx + 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx - 1, triminosy - 1, trans)
    }
    if (!(led.point(triminosx + 1, triminosy - 1)) && (x == 4 && !(led.point(triminosx + 1, triminosy))) && (Fallen != 1 && triminosx != 4)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx, triminosy - 1)
        led.unplot(triminosx - 1, triminosy)
        triminosx = triminosx + 1
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx - 1, triminosy, trans)
    }
    if (x == 5 && !(led.point(triminosx + 2, triminosy)) && (Fallen != 1 && triminosx != 3)) {
        led.unplot(triminosx, triminosy)
        led.unplot(triminosx + 1, triminosy)
        led.unplot(triminosx - 1, triminosy)
        triminosx = triminosx + 1
        led.plot(triminosx, triminosy)
        led.plot(triminosx + 1, triminosy)
        led.plot(triminosx - 1, triminosy)
    }
})
let Score = 0
let trans = 0
let triminosy = 0
let triminosx = 0
let Fallen = 0
let x = 0
while (true) {
    x = randint(0, 5)
    Fallen = 0
    if (x == 0) {
        triminosx = 2
        triminosy = 0
        trans = 43
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx, triminosy - 2, trans)
        while (Fallen != 1 && triminosy != 4) {
            basic.pause(750)
            if (!(led.point(triminosx, triminosy + 1) || triminosy == 4)) {
                led.unplot(triminosx, triminosy)
                led.unplot(triminosx, triminosy - 1)
                led.unplot(triminosx, triminosy - 2)
                triminosy = triminosy + 1
                led.plotBrightness(triminosx, triminosy, trans)
                led.plotBrightness(triminosx, triminosy - 1, trans)
                led.plotBrightness(triminosx, triminosy - 2, trans)
            }
            if (led.point(triminosx, triminosy + 1) || triminosy == 4) {
                basic.pause(500)
                if (led.point(triminosx, triminosy + 1) || triminosy == 4) {
                    Fallen = 1
                }
            }
        }
    }
    if (x == 1) {
        triminosx = 2
        triminosy = 0
        trans = 85
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx + 1, triminosy, trans)
        while (Fallen != 1 && triminosy != 4) {
            basic.pause(750)
            if (!(led.point(triminosx + 1, triminosy + 1) || led.point(triminosx, triminosy + 1) || triminosy == 4)) {
                led.unplot(triminosx, triminosy)
                led.unplot(triminosx, triminosy - 1)
                led.unplot(triminosx + 1, triminosy)
                triminosy = triminosy + 1
                led.plotBrightness(triminosx, triminosy, trans)
                led.plotBrightness(triminosx, triminosy - 1, trans)
                led.plotBrightness(triminosx + 1, triminosy, trans)
            }
            if (led.point(triminosx + 1, triminosy + 1) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                basic.pause(500)
                if (led.point(triminosx + 1, triminosy + 1) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                    Fallen = 1
                }
            }
        }
    }
    if (x == 2) {
        triminosx = 2
        triminosy = 0
        trans = 128
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx + 1, triminosy - 1, trans)
        while (Fallen != 1 && triminosy != 4) {
            basic.pause(750)
            if (!(led.point(triminosx + 1, triminosy) || led.point(triminosx, triminosy + 1) || triminosy == 4)) {
                led.unplot(triminosx, triminosy)
                led.unplot(triminosx, triminosy - 1)
                led.unplot(triminosx + 1, triminosy - 1)
                triminosy = triminosy + 1
                led.plotBrightness(triminosx, triminosy, trans)
                led.plotBrightness(triminosx, triminosy - 1, trans)
                led.plotBrightness(triminosx + 1, triminosy - 1, trans)
            }
            if (led.point(triminosx + 1, triminosy) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                basic.pause(500)
                if (led.point(triminosx + 1, triminosy) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                    Fallen = 1
                }
            }
        }
    }
    if (x == 3) {
        triminosx = 2
        triminosy = 0
        trans = 170
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx - 1, triminosy - 1, trans)
        while (Fallen != 1 && triminosy != 4) {
            basic.pause(750)
            if (!(led.point(triminosx - 1, triminosy) || led.point(triminosx, triminosy + 1) || triminosy == 4)) {
                led.unplot(triminosx, triminosy)
                led.unplot(triminosx, triminosy - 1)
                led.unplot(triminosx - 1, triminosy - 1)
                triminosy = triminosy + 1
                led.plotBrightness(triminosx, triminosy, trans)
                led.plotBrightness(triminosx, triminosy - 1, trans)
                led.plotBrightness(triminosx - 1, triminosy - 1, trans)
            }
            if (led.point(triminosx - 1, triminosy) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                basic.pause(500)
                if (led.point(triminosx - 1, triminosy) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                    Fallen = 1
                }
            }
        }
    }
    if (x == 4) {
        triminosx = 2
        triminosy = 0
        trans = 213
        led.plotBrightness(triminosx, triminosy, trans)
        led.plotBrightness(triminosx, triminosy - 1, trans)
        led.plotBrightness(triminosx - 1, triminosy, trans)
        while (Fallen != 1 && triminosy != 4) {
            basic.pause(750)
            if (!(led.point(triminosx - 1, triminosy + 1) || led.point(triminosx, triminosy + 1) || triminosy == 4)) {
                led.unplot(triminosx, triminosy)
                led.unplot(triminosx, triminosy - 1)
                led.unplot(triminosx - 1, triminosy)
                triminosy = triminosy + 1
                led.plotBrightness(triminosx, triminosy, trans)
                led.plotBrightness(triminosx, triminosy - 1, trans)
                led.plotBrightness(triminosx - 1, triminosy, trans)
            }
            if (led.point(triminosx - 1, triminosy + 1) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                basic.pause(500)
                if (led.point(triminosx - 1, triminosy + 1) || led.point(triminosx, triminosy + 1) || triminosy == 4) {
                    Fallen = 1
                }
            }
        }
    }
    if (x == 5) {
        triminosx = 2
        triminosy = 0
        led.plotBrightness(triminosx, triminosy, 255)
        led.plotBrightness(triminosx + 1, triminosy, 255)
        led.plotBrightness(triminosx - 1, triminosy, 255)
        while (Fallen != 1 && triminosy != 4) {
            basic.pause(750)
            if (!(led.point(triminosx + 1, triminosy + 1) || (led.point(triminosx - 1, triminosy + 1) || led.point(triminosx, triminosy + 1)) || triminosy == 4)) {
                led.unplot(triminosx, triminosy)
                led.unplot(triminosx + 1, triminosy)
                led.unplot(triminosx - 1, triminosy)
                triminosy = triminosy + 1
                led.plotBrightness(triminosx, triminosy, 255)
                led.plotBrightness(triminosx + 1, triminosy, 255)
                led.plotBrightness(triminosx - 1, triminosy, 255)
            }
            if (led.point(triminosx + 1, triminosy + 1) || (led.point(triminosx - 1, triminosy + 1) || led.point(triminosx, triminosy + 1)) || triminosy == 4) {
                basic.pause(500)
                if (led.point(triminosx + 1, triminosy + 1) || (led.point(triminosx - 1, triminosy + 1) || led.point(triminosx, triminosy + 1)) || triminosy == 4) {
                    Fallen = 1
                }
            }
        }
    }
    for (let index = 0; index < 3; index++) {
        if (led.point(4, 0) && (led.point(3, 0) && led.point(2, 0) && (led.point(0, 0) && led.point(1, 0)))) {
            Score = Score + 1
            led.unplot(0, 0)
            led.unplot(1, 0)
            led.unplot(2, 0)
            led.unplot(3, 0)
            led.unplot(4, 0)
        }
        if (led.point(4, 1) && (led.point(3, 1) && led.point(2, 1) && (led.point(0, 1) && led.point(1, 1)))) {
            Score = Score + 1
            led.unplot(0, 1)
            led.unplot(1, 1)
            led.unplot(2, 1)
            led.unplot(3, 1)
            led.unplot(4, 1)
            if (led.point(0, 0)) {
                led.plotBrightness(0, 1, led.pointBrightness(0, 0))
                led.unplot(0, 0)
            }
            if (led.point(1, 0)) {
                led.plotBrightness(1, 1, led.pointBrightness(1, 0))
                led.unplot(1, 0)
            }
            if (led.point(2, 0)) {
                led.plotBrightness(2, 1, led.pointBrightness(2, 0))
                led.unplot(2, 0)
            }
            if (led.point(3, 0)) {
                led.plotBrightness(3, 1, led.pointBrightness(3, 0))
                led.unplot(3, 0)
            }
            if (led.point(4, 0)) {
                led.plotBrightness(4, 1, led.pointBrightness(4, 0))
                led.unplot(4, 0)
            }
        }
        if (led.point(4, 2) && (led.point(3, 2) && led.point(2, 2) && (led.point(0, 2) && led.point(1, 2)))) {
            Score = Score + 1
            led.unplot(0, 2)
            led.unplot(1, 2)
            led.unplot(2, 2)
            led.unplot(3, 2)
            led.unplot(4, 2)
            if (led.point(0, 1)) {
                led.plotBrightness(0, 2, led.pointBrightness(0, 1))
                led.unplot(0, 1)
            }
            if (led.point(1, 1)) {
                led.plotBrightness(1, 2, led.pointBrightness(1, 1))
                led.unplot(1, 1)
            }
            if (led.point(2, 1)) {
                led.plotBrightness(2, 2, led.pointBrightness(2, 1))
                led.unplot(2, 1)
            }
            if (led.point(3, 1)) {
                led.plotBrightness(3, 2, led.pointBrightness(3, 1))
                led.unplot(3, 1)
            }
            if (led.point(4, 1)) {
                led.plotBrightness(4, 2, led.pointBrightness(4, 1))
                led.unplot(4, 1)
            }
            if (led.point(0, 0)) {
                led.plotBrightness(0, 1, led.pointBrightness(0, 0))
                led.unplot(0, 0)
            }
            if (led.point(1, 0)) {
                led.plotBrightness(1, 1, led.pointBrightness(1, 0))
                led.unplot(1, 0)
            }
            if (led.point(2, 0)) {
                led.plotBrightness(2, 1, led.pointBrightness(2, 0))
                led.unplot(2, 0)
            }
            if (led.point(3, 0)) {
                led.plotBrightness(3, 1, led.pointBrightness(3, 0))
                led.unplot(3, 0)
            }
            if (led.point(4, 0)) {
                led.plotBrightness(4, 1, led.pointBrightness(4, 0))
                led.unplot(4, 0)
            }
        }
        if (led.point(4, 3) && (led.point(3, 3) && led.point(2, 3) && (led.point(0, 3) && led.point(1, 3)))) {
            Score = Score + 1
            led.unplot(0, 3)
            led.unplot(1, 3)
            led.unplot(2, 3)
            led.unplot(3, 3)
            led.unplot(4, 3)
            if (led.point(0, 2)) {
                led.plotBrightness(0, 3, led.pointBrightness(0, 2))
                led.unplot(0, 2)
            }
            if (led.point(1, 2)) {
                led.plotBrightness(1, 3, led.pointBrightness(1, 2))
                led.unplot(1, 2)
            }
            if (led.point(2, 2)) {
                led.plotBrightness(2, 3, led.pointBrightness(2, 2))
                led.unplot(2, 2)
            }
            if (led.point(3, 2)) {
                led.plotBrightness(3, 3, led.pointBrightness(3, 2))
                led.unplot(3, 2)
            }
            if (led.point(4, 2)) {
                led.plotBrightness(4, 3, led.pointBrightness(4, 2))
                led.unplot(4, 2)
            }
            if (led.point(0, 1)) {
                led.plotBrightness(0, 2, led.pointBrightness(0, 1))
                led.unplot(0, 1)
            }
            if (led.point(1, 1)) {
                led.plotBrightness(1, 2, led.pointBrightness(1, 1))
                led.unplot(1, 1)
            }
            if (led.point(2, 1)) {
                led.plotBrightness(2, 2, led.pointBrightness(2, 1))
                led.unplot(2, 1)
            }
            if (led.point(3, 1)) {
                led.plotBrightness(3, 2, led.pointBrightness(3, 1))
                led.unplot(3, 1)
            }
            if (led.point(4, 1)) {
                led.plotBrightness(4, 2, led.pointBrightness(4, 1))
                led.unplot(4, 1)
            }
            if (led.point(0, 0)) {
                led.plotBrightness(0, 1, led.pointBrightness(0, 0))
                led.unplot(0, 0)
            }
            if (led.point(1, 0)) {
                led.plotBrightness(1, 1, led.pointBrightness(1, 0))
                led.plot(1, 1)
                led.unplot(1, 0)
            }
            if (led.point(2, 0)) {
                led.plotBrightness(2, 1, led.pointBrightness(2, 0))
                led.unplot(2, 0)
            }
            if (led.point(3, 0)) {
                led.plotBrightness(3, 1, led.pointBrightness(3, 0))
                led.unplot(3, 0)
            }
            if (led.point(4, 0)) {
                led.plotBrightness(4, 1, led.pointBrightness(4, 0))
                led.unplot(4, 0)
            }
        }
        if (led.point(4, 4) && (led.point(3, 4) && led.point(2, 4) && (led.point(0, 4) && led.point(1, 4)))) {
            Score = Score + 1
            led.unplot(0, 4)
            led.unplot(1, 4)
            led.unplot(2, 4)
            led.unplot(3, 4)
            led.unplot(4, 4)
            if (led.point(0, 3)) {
                led.plotBrightness(0, 4, led.pointBrightness(0, 3))
                led.unplot(0, 3)
            }
            if (led.point(1, 3)) {
                led.plotBrightness(1, 4, led.pointBrightness(1, 3))
                led.unplot(1, 3)
            }
            if (led.point(2, 3)) {
                led.plotBrightness(2, 4, led.pointBrightness(2, 3))
                led.unplot(2, 3)
            }
            if (led.point(3, 3)) {
                led.plotBrightness(3, 4, led.pointBrightness(3, 3))
                led.unplot(3, 3)
            }
            if (led.point(4, 3)) {
                led.plotBrightness(4, 4, led.pointBrightness(4, 3))
                led.unplot(4, 3)
            }
            if (led.point(0, 2)) {
                led.plotBrightness(0, 3, led.pointBrightness(0, 2))
                led.unplot(0, 2)
            }
            if (led.point(1, 2)) {
                led.plotBrightness(1, 3, led.pointBrightness(1, 2))
                led.unplot(1, 2)
            }
            if (led.point(2, 2)) {
                led.plotBrightness(2, 3, led.pointBrightness(2, 2))
                led.unplot(2, 2)
            }
            if (led.point(3, 2)) {
                led.plotBrightness(3, 3, led.pointBrightness(3, 2))
                led.unplot(3, 2)
            }
            if (led.point(4, 2)) {
                led.plotBrightness(4, 3, led.pointBrightness(4, 2))
                led.unplot(4, 2)
            }
            if (led.point(0, 1)) {
                led.plotBrightness(0, 2, led.pointBrightness(0, 1))
                led.unplot(0, 1)
            }
            if (led.point(1, 1)) {
                led.plotBrightness(1, 2, led.pointBrightness(1, 1))
                led.unplot(1, 1)
            }
            if (led.point(2, 1)) {
                led.plotBrightness(2, 2, led.pointBrightness(2, 1))
                led.unplot(2, 1)
            }
            if (led.point(3, 1)) {
                led.plotBrightness(3, 2, led.pointBrightness(3, 1))
                led.unplot(3, 1)
            }
            if (led.point(4, 1)) {
                led.plotBrightness(4, 2, led.pointBrightness(4, 1))
                led.unplot(4, 1)
            }
            if (led.point(0, 0)) {
                led.plotBrightness(0, 1, led.pointBrightness(0, 0))
                led.unplot(0, 0)
            }
            if (led.point(1, 0)) {
                led.plotBrightness(1, 1, led.pointBrightness(1, 0))
                led.unplot(1, 0)
            }
            if (led.point(2, 0)) {
                led.plotBrightness(2, 1, led.pointBrightness(2, 0))
                led.unplot(2, 0)
            }
            if (led.point(3, 0)) {
                led.plotBrightness(3, 1, led.pointBrightness(3, 0))
                led.unplot(3, 0)
            }
            if (led.point(4, 0)) {
                led.plotBrightness(4, 1, led.pointBrightness(4, 0))
                led.unplot(4, 0)
            }
        }
    }
    if (x == 4 && led.point(1, 0) || (x == 5 && led.point(1, 0) || x == 5 && led.point(3, 0) || (x == 1 && led.point(3, 0) || (x <= 4 && x >= 1 && triminosy - 1 < 0 || (x == 0 && triminosy - 2 < 0 || led.point(2, 0)))))) {
        led.unplot(0, 4)
        led.unplot(1, 4)
        led.unplot(2, 4)
        led.unplot(3, 4)
        led.unplot(4, 4)
        basic.pause(500)
        led.unplot(0, 3)
        led.unplot(1, 3)
        led.unplot(2, 3)
        led.unplot(3, 3)
        led.unplot(4, 3)
        basic.pause(500)
        led.unplot(0, 2)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
        led.unplot(4, 2)
        basic.pause(500)
        led.unplot(0, 1)
        led.unplot(1, 1)
        led.unplot(2, 1)
        led.unplot(3, 1)
        led.unplot(4, 1)
        basic.pause(500)
        led.unplot(0, 0)
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
        led.unplot(4, 0)
        basic.pause(500)
        while (true) {
            basic.showString("" + (Score))
        }
    }
    basic.pause(1000)
}
