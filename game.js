// game.js
document.addEventListener('DOMContentLoaded', () => {
    const map = [
        [1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1]
    ];
    const start = { x: 1, y: 1 };
    const end = { x: 4, y: 4 };

    const labyrinth = new Labyrinth(map, start, end);
    labyrinth.printDisplay('map');

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                labyrinth.moveCharacter(0, -1);
                break;
            case 'ArrowDown':
                labyrinth.moveCharacter(0, 1);
                break;
            case 'ArrowLeft':
                labyrinth.moveCharacter(-1, 0);
                break;
            case 'ArrowRight':
                labyrinth.moveCharacter(1, 0);
                break;
        }
        labyrinth.printDisplay('map');
    });
});
