const container = document.getElementById('container')

const colors = [
  '#FFD1DC',
  '#FFB6C1',
  '#FF9AA2',
  '#FF7F9D',
  '#FF5C8A',
  '#E75480',
  '#D94C75',
  '#C23B6D'
]

//const squareSize = 50;//
//const cols = Math.floor(window.innerWidth / squareSize);//
//const rows = Math.floor(window.innerHeight / squareSize);//

//const SQUARES = cols * rows;

const SQUARES = 500;

for(let i = 0; i< SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square') 

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () =>  removeColor(square)
    )

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`    
}

function removeColor(element){
    element.style.background =  '#1d1d1d';
    element.style.boxShadow = '0 0 2px #0000'



}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
