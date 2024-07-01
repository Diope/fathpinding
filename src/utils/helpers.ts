import { MAX_COL, MAX_ROW } from "./constants";
import { GridType, TileType } from "./types";

export const createGrid = (startTile: TileType, endTile: TileType) => {
	const grid: GridType = [];
	for (let row = 0; row < MAX_ROW; row++) {
		grid.push(createRow(row, startTile, endTile));
	}
	// console.log(grid);
	return grid;
};

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
	const currentRow = [];
	for (let col = 0; col < MAX_COL; col++) {
		currentRow.push({
			row,
			col,
			isWall: false,
			isVisited: false,
			steps: Infinity,
			isStart: row === startTile.row && col === startTile.col,
			isEnd: row === endTile.row && col === endTile.col,
			parent: null,
		});
	}
	// console.log(currentRow, "I AM A CREATED ROW HO HO");
	return currentRow;
};

export const checkIfStartOrEnd = (row: number, col: number) => {
	return (row === 1 && col === 1) || (row === MAX_ROW - 2 && col === MAX_COL - 2);
};

export const createNewGrid = (grid: GridType, row: number, col: number) => {
    const newGrid = grid.slice();
    const newTile = {...newGrid[row][col], isWall: !newGrid[row][col].isWall};
    newGrid[row][col] = newTile;
    return newGrid;
}
