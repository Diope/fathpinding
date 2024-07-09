import { MAX_COL, MAX_ROW } from "../../utils/constants";
import { createWall, destroyWall } from "../../utils/Wall";
import { algoSleep, getRandomInt, isEqual } from "../../utils/helpers";
import { GridType, SpeedType, TileType } from "../../utils/types";

export const binaryTree = async (
	grid: GridType,
	startTile: TileType,
	endTile: TileType,
	setIsDisabled: (isDisabled: boolean) => void,
	speed: SpeedType
) => {
	createWall(startTile, endTile, speed);
	await algoSleep(MAX_ROW * MAX_COL);

	for (const row of grid) {
		for (const tile of row) {
			if (tile.row % 2 === 0 || tile.col % 2 === 0) {
				if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
					tile.isWall = true;
				}
			}
		}
	}

	for (let row = 1; row < MAX_ROW; row += 2) {
		for (let col = 1; col < MAX_COL; col += 2) {
			if (row === MAX_ROW - 2 && col === MAX_COL - 2) {
				console.log("greetings from a binary tree in a galaxy far far away");
				continue;
			} else if ((row = MAX_ROW - 2)) {
				await destroyWall(grid, row, col, 1, speed);
			} else if (col === MAX_COL - 2) {
				await destroyWall(grid, row, col, 0, speed);
			} else {
				await destroyWall(grid, row, col, getRandomInt(0, 2), speed);
			}
		}
	}
	setIsDisabled(false);
};
