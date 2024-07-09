import { MazeType, SpeedType } from "./types";

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
	isPath: false,
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
	isPath: false,
	parent: null,
	steps: 0,
};

export const TILE_STYLE =
	"lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-gray-500";

export const VISITED_TILE_STYLE = TILE_STYLE + " bg-cyan-400";
export const START_TILE_STYLE = TILE_STYLE + " bg-teal-300";
export const END_TILE_STYLE = TILE_STYLE + " bg-rose-400";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-yellow-200";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-300";

interface IMazeTypeSelect {
	name: string;
	value: MazeType;
}

export const MAZES: IMazeTypeSelect[] = [
	{ name: "None", value: "NONE" },
	{ name: "Binary Tree", value: "BINARY_TREE" },
	{ name: "Recursive", value: "RECURSIVE" },
];

interface ISpeedTypeSelect {
	name: string;
	value: SpeedType;
}

export const SPEEDS: ISpeedTypeSelect[] = [
	{ name: "Slow", value: 4 },
	{ name: "Medium", value: 2 },
	{ name: "Fast", value: 1 },
];
