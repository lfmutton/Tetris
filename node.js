class Grid {
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.DrawGrid(315, 610, "#322d62");
        this.outlineContext = this.DrawGrid(275, 550, "#111");
        this.topContext = this.DrawGrid(275, 500, "#111", true)
        this.cellSize = 30
        this.padding = 4
    }
    DrawGrid(w, h, color = "#111", trasparent = false) {

        this.canvas = document.createElement("canvas")
        this.context = this.canvas.getContext("2d")
        this.canvas.height = h
        this.canvas.width = w
        this.canvas.style.position = "absolute"
        this.canvas.style.background = color
        if (trasparent)
            this.canvas.style.backgroundColor = "transparent"
        this.canvas.style.marginLeft = (window.innerWidth / 2) - (w / 2) + "px"
        this.canvas.style.marginTop = (window.innerHeight / 2) - (h / 2) + "px"
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
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const gridSystem = new Grid(matrix);