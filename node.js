class Grid {
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.DrawGrid(420, 580, "#f1b1");
        this.outlineContext = this.DrawGrid(320, 480, "#111");
    }
    DrawGrid(w, h, color = "#111") {

        this.canvas = document.createElement("canvas")
        this.context = this.canvas.getContext("2d")
        this.width = this.canvas.height = w
        this.height = this.canvas.width = h
        this.canvas.style.position = "absolute"
        this.canvas.style.background = color
        this.canvas.style.marginLeft = window.innerWidth / 2 - w / 2 + "px"
        this.canvas.style.marginTop = window.innerHeight / 2 - h / 2 + "px"
        document.body.appendChild(this.canvas)

        return this.context
    }
}

class Game {
    Start() {
        this.gameOver = false
        while (gameOver != true) {
            if (this.IsFinished()) {
                this.gameOver = true
            }
        }
    }
    IsFinished() {
        return true
    }
}



const matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const gridSystem = new Grid(matrix);