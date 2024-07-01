export const MAX_COL = 50;
export const MAX_ROW = 50;
export const MAX_TILES = MAX_COL * MAX_ROW;

export const START_TILE_CONFIG = {
	row: 1,
	col: 1,
	isEnd: false,
	isWall: false,
	isStart: false,
	isVisited: false,
	parent: null,
	steps: 0,
};

export const END_TILE_CONFIG = {
    row: MAX_ROW - 2,
    col: MAX_COL - 2,
    isEnd: false,
    isWall: false,
    isStart: false,
    isVisited: false,
    parent: null,
    steps: 0,
};