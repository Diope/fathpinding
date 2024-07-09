import {
	MAX_COL,
	MAX_ROW,
	SPEEDS,
	TILE_STYLE,
	WALL_TILE_STYLE,
} from "./constants";
import { algoSleep, isRowAndColEqual } from "./helpers";
import { GridType, SpeedType, TileType } from "./types";

export const createWall = (
	startTile: TileType,
	endTile: TileType,
	speed: SpeedType
) => {
	const delay = 8 * SPEEDS.find((s) => s.value === speed)!.value - 1;
	for (let row = 0; row < MAX_ROW; row++) {
		setTimeout(() => {
			for (let col = 0; col < MAX_COL; col++) {
				if (row % 2 === 0 || col % 2 === 0) {
					if (
						!isRowAndColEqual(row, col, startTile) &&
						!isRowAndColEqual(row, col, endTile)
					) {
						setTimeout(() => {
							document.getElementById(
								`${row}-${col}`
							)!.className = `${WALL_TILE_STYLE} animate-wall`;
						}, delay * col);
					}
				}
			}
		}, delay * (MAX_ROW / 2) * row);
	}
};

export const destroyWall = async (
	grid: GridType,
	row: number,
	col: number,
	isRight: number,
	speed: SpeedType
) => {
	if (isRight && grid[row][col + 1]) {
		grid[row][col + 1].isWall = false;
		document.getElementById(`${row}-${col + 1}`)!.className = TILE_STYLE;
		await sleeping();
	} else if (grid[row + 1]) {
		grid[row + 1][col].isWall = false;
		document.getElementById(`${row + 1}-${col}`)!.className = TILE_STYLE;
		await sleeping();
	} else {
		grid[row][col].isWall = false;
		document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
		await sleeping();
	}

	async function sleeping() {
		await algoSleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 3);
	}
};
