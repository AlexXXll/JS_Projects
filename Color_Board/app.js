const board = document.querySelector('#board')
const colors = ['rgb(0, 162, 255)', 'rgb(166, 255, 107)', 'rgb(247, 0, 255)', 'rgb(66, 255, 123)', 'rgb(255, 255, 255)', 'rgb(255, 71, 126)']
const SQARES_NUMBER = 700

for (let i = 0; i < SQARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const colors = getRandomColor()
    element.style.backgroundColor = colors
    element.style.boxShadow = `0 0 2px ${colors}, 0 0 20px ${colors}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}