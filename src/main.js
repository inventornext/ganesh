import './style.css'

// Lightweight interactive background — a soft glow that follows the
// pointer (mouse or touch), drawn with a single CSS radial-gradient.
// No WebGPU / Three.js: just one div, updated on rAF, so it's cheap
// on both desktop and mobile.

const glow = document.createElement('div')

glow.setAttribute('aria-hidden', 'true')

Object.assign(glow.style, {

    position: 'fixed',
    inset: '0',
    zIndex: '-1',
    pointerEvents: 'none'

})

document.body.prepend(glow)

let target_x = window.innerWidth * 0.7
let target_y = window.innerHeight * 0.35
let current_x = target_x
let current_y = target_y
let hue = 250

function paint() {

    glow.style.background =
        `radial-gradient(circle at ${current_x}px ${current_y}px, ` +
        `hsla(${hue}, 45%, 45%, 0.28), transparent 45%), ` +
        `radial-gradient(circle at 20% 90%, hsla(190, 40%, 40%, 0.12), transparent 50%)`

}

function tick() {

    current_x += (target_x - current_x) * 0.07
    current_y += (target_y - current_y) * 0.07

    paint()

    requestAnimationFrame(tick)

}

function set_target(x, y) {

    target_x = x
    target_y = y

}

window.addEventListener('pointermove', (e) => {

    set_target(e.clientX, e.clientY)

})

window.addEventListener('touchmove', (e) => {

    const t = e.touches[0]

    if (t) set_target(t.clientX, t.clientY)

}, { passive: true })

window.addEventListener('scroll', () => {

    const scrollable = Math.max(
        1,
        document.body.scrollHeight - window.innerHeight
    )

    const y_ratio = Math.min(1, window.scrollY / scrollable)

    hue = 200 + y_ratio * 160

})

requestAnimationFrame(tick)
