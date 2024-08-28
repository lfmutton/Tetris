class Grid {
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.DrawGrid(315, 610, "#000000");
        this.outlineContext = this.DrawGrid(275, 550, "#9b99ab");
        this.topContext = this.DrawGrid(275, 500, "#111", true)
        this.cellSize = 26

        this.padding = 0.3

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
        PutLocation(this.context, w, h)
        document.body.appendChild(this.canvas)
        return this.context
    }
    Paint() {
        let w = (this.cellSize + this.padding) * this.matrix[0].length - this.padding
        let h = (this.cellSize + this.padding) * this.matrix.length - this.padding

        this.outlineContext.canvas.width = w
        this.outlineContext.canvas.height = h


        PutLocation(this.outlineContext, w, h)

        PutLocation(this.topContext, w, h)

        for (let l = 0; l < this.matrix[0].length; l++) {
            for (let c = 0; c < this.matrix.length; c++) {
                this.outlineContext.fillStyle = this.matrix[c][l] > 0 ? "#fff" : "#000000"
                this.outlineContext.fillRect(l * (this.cellSize + this.padding), c * (this.cellSize + this.padding), this.cellSize, this.cellSize);
            }
        }
    }
}

function PutLocation(ctx, w, h) {
    ctx.canvas.style.marginLeft = (window.innerWidth / 2) - (w / 2) + "px"
    ctx.canvas.style.marginTop = (window.innerHeight / 2) - (h / 2) + "px"
}


class Game {
    Start() {
        this.gameOver = false
        while (this.gameOver != true) {
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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const gridSystem = new Grid(matrix);
gridSystem.Paint();