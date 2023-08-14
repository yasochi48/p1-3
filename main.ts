function 再描画 () {
    傾き調査()
    led.plot(x, y)
}
function 傾き調査 () {
    if (input.rotation(Rotation.Roll) > 30) {
        右に進む()
    } else if (input.rotation(Rotation.Roll) < -30) {
        左に進む()
    }
}
input.onButtonPressed(Button.A, function () {
    左に進む()
})
function 右に進む () {
    led.unplot(x, y)
    if (x <= 3) {
        x += 1
    }
}
input.onButtonPressed(Button.B, function () {
    発射中 = 1
    while (y > 0) {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
        basic.pause(100)
    }
    led.unplot(x, y)
    basic.pause(1000)
    led.unplot(x, y)
    初期位置へ()
    発射中 = 0
})
function 初期位置へ () {
    x = 2
    y = 4
}
function 左に進む () {
    led.unplot(x, y)
    x += 0 - 1
}
let y = 0
let x = 0
let 発射中 = 0
初期位置へ()
発射中 = 0
basic.forever(function () {
    basic.pause(100)
    if (発射中 == 0) {
        再描画()
    }
})
