import { ReactNode, createContext, useState } from "react";

type AlgorithmType = "BFS" | "DFS" | "Dijkstra" | "A*";
type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE";
type TileType = {
	row: number;
	col: number;
	isWall: true;
	steps: number;
};
type GridType = TileType[][];

interface IPTContext {
	algorithm: AlgorithmType;
	setAlgorithm: (algorithm: AlgorithmType) => void;
	maze: MazeType;
	setMaze: (maze: MazeType) => void;
	grid: GridType;
	setGrid: (grid: GridType) => void;
	isVisualized: boolean;
	setIsVisualized: (isVisualized: boolean) => void;
}

export const PTContext = createContext<IPTContext | undefined>(
	{} as IPTContext
);

export const PFProvider = ({ children }: { children: ReactNode }) => {
	const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
	const [maze, setMaze] = useState<MazeType>("NONE");
	const [grid, setGrid] = useState<GridType>([]);
};
