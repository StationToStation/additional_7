module.exports = function solveSudoku(puzzle) {
    let unsolved = 1;

    function Check(compared, puzzle, i, j) {
        //Проверяет, можно ли поставить число

        //в квадрате
        let row = Math.floor(i / 3) * 3;
        let col = Math.floor(j / 3) * 3;
        for (let k = row; k < row + 3; k++)
            for (let n = col; n < col + 3; n++)
                if (compared == puzzle[k][n]) return false;

        //в строке
        for (let k = 0; k < puzzle[i].length; k++)
            if (compared == puzzle[i][k]) return false;

        // в столбце
        for (let k = 0; k < puzzle.length; k++)
            if (compared == puzzle[k][j]) return false;

        return true;
    }

    function RecSolve(puzzle, index) {
        if (index > 80) {
            unsolved = 0;
            return;
        }
        let i = Math.floor(index / 9),
            j = index % 9;
        if (puzzle[i][j] !== 0)
            return RecSolve(puzzle, index + 1);


        for (let variant = 1; variant < 10; variant++) {
            if (Check(variant, puzzle, i, j)) {
                puzzle[i][j] = variant;
                RecSolve(puzzle, index + 1);
            }
        }
        if (unsolved) puzzle[i][j] = 0;
    }
    RecSolve(puzzle, 0);
    return puzzle;
}
