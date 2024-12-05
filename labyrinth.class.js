// labyrinth.class.js
class Labyrinth {
    constructor(map, start, end) {
        this.map = map;
        this.start = start;
        this.end = end;
        this.character = { x: start.x, y: start.y };
    }

    printConsole() {
        console.log(this.map.map(row => row.map(cell => cell === 1 ? '*' : ' ').join('')).join('\n'));
    }

    printDisplay(id) {
        const container = document.getElementById(id);
        const cellSize = 20; // Adjust as needed
        container.style.setProperty('--cell-size', `${cellSize}px`);
        container.style.width = `${cellSize * this.map[0].length}px`;
        container.style.height = `${cellSize * this.map.length}px`;
        container.innerHTML = '';

        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.style.top = `${y * cellSize}px`;
                cell.style.left = `${x * cellSize}px`;

                if (this.character.x === x && this.character.y === y) {
                    cell.classList.add('character');
                } else if (x === this.start.x && y === this.start.y) {
                    cell.classList.add('start');
                } else if (x === this.end.x && y === this.end.y) {
                    cell.classList.add('end');
                } else if (this.map[y][x] === 1) {
                    cell.classList.add('wall');
                } else {
                    cell.classList.add('empty');
                }

                container.appendChild(cell);
            }
        }
    }

    moveCharacter(dx, dy) {
        const newX = this.character.x + dx;
        const newY = this.character.y + dy;

        if (this.isValidMove(newX, newY)) {
            this.character.x = newX;
            this.character.y = newY;
            if (this.character.x === this.end.x && this.character.y === this.end.y) {
                alert('Congratulations!');
            }
            return true;
        }
        return false;
    }

    isValidMove(x, y) {
        return x >= 0 && x < this.map[0].length && y >= 0 && y < this.map.length && this.map[y][x] === 0;
    }
}
