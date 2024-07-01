export type AlgorithmType = "BFS" | "DFS" | "Dijkstra" | "A*";
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE";
export type TileType = {
	parent: TileType | null;
	steps: number;
	row: number;
	col: number;
	isWall: boolean;
	isStart: boolean;
	isEnd: boolean;
	isVisited: boolean;
};
export type GridType = TileType[][];

export type SpeedType = 4 | 2 | 1;
