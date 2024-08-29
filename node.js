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
        let color = getRandomColor()

        this.outlineContext.canvas.width = w
        this.outlineContext.canvas.height = h


        PutLocation(this.outlineContext, w, h)

        PutLocation(this.topContext, w, h)

        for (let l = 0; l < this.matrix[0].length; l++) {
            for (let c = 0; c < this.matrix.length; c++) {
                if (this.matrix[c][l] === 1)
                    this.outlineContext.fillStyle = "#fff"
                else if (this.matrix[c][l] === 2)
                    this.outlineContext.fillStyle = color
                else
                    this.outlineContext.fillStyle = "#000000"
                this.outlineContext.fillRect(l * (this.cellSize + this.padding), c * (this.cellSize + this.padding), this.cellSize, this.cellSize);
            }
        }
    }
}

const FORMATS = {
    0: [
        [2],
        [2],
        [2],
        [2]
    ],
    1: [
        [2, 0],
        [2, 0],
        [2, 0],
        [2, 2]
    ],
    2: [
        [0, 2],
        [0, 2],
        [0, 2],
        [2, 2]
    ],
    3: [
        [2, 2, 2],
        [0, 2, 0]
    ],
    4: [
        [2, 2],
        [2, 2]
    ],
    5: [
        [2, 2, 0],
        [0, 2, 2]
    ],
    6: [
        [0, 2, 2],
        [2, 2, 0]
    ]
}

const COLORS = {
    0: "#f02020",
    1: "#9b18f6",
    2: "#1823cc",
    3: "#47d0e3",
    4: "#3ed132",
    5: "#dee428",
    6: "#fa99ff",
}


function PutLocation(ctx, w, h) {
    ctx.canvas.style.marginLeft = (window.innerWidth / 2) - (w / 2) + "px"
    ctx.canvas.style.marginTop = (window.innerHeight / 2) - (h / 2) + "px"
}

function getRandomBlock() {
    let integer = getRandomNum(7)
    return FORMATS[integer]
}

function getRandomColor() {
    let integer = getRandomNum(7)
    return COLORS[integer]
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max)
}

function BlockInMatrix(piece, grid) {
    let randLocation = getRandomNum(grid[0].length - piece[0].length - 1)
    for (let l = 0; l < piece.length; l++) {
        for (let c = 0; c < piece[0].length; c++) {
            grid[l + 1][randLocation + 1 + c] = piece[l][c]
        }
    }
    return grid
}

class Game {
    constructor(grid) {
        this.grid = grid
        this.gameOver = false
    }
    StartGame() {
        while (this.gameOver != true) {
            let block = getRandomBlock()
            this.grid.matrix = BlockInMatrix(block, this.grid.matrix)
            this.grid.Paint()
            this.gameOver = this.IsFinished()
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
const game = new Game(gridSystem)
game.StartGame()