import init, {get_sign} from './hello_wasm.js'

;(async () => {
    await init()
})()


document.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault()

    const input = document.querySelector('#input').value
    if (!input) {
        return
    }
    document.querySelector('#result').textContent = get_sign(input)
})
