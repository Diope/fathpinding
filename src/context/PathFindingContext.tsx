import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, MazeType, GridType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { START_TILE_CONFIG, END_TILE_CONFIG } from "../utils/constants";

interface IPathFindingContext {
	algorithm: AlgorithmType;
	setAlgorithm: (algorithm: AlgorithmType) => void;
	maze: MazeType;
	setMaze: (maze: MazeType) => void;
	grid: GridType;
	setGrid: (grid: GridType) => void;
	isVisualized: boolean;
	setIsVisualized: (isVisualized: boolean) => void;
}

export const PathFindingContext = createContext<
	IPathFindingContext | undefined
>(undefined);

export const PathFindingProvider = ({ children }: { children: ReactNode }) => {
	const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
	const [maze, setMaze] = useState<MazeType>("NONE");
	const [grid, setGrid] = useState<GridType>(
		createGrid(START_TILE_CONFIG, END_TILE_CONFIG)
	);
	const [isVisualized, setIsVisualized] = useState<boolean>(false);

	return (
		<PathFindingContext.Provider
			value={{
				algorithm,
				setAlgorithm,
				maze,
				setMaze,
				grid,
				setGrid,
				isVisualized,
				setIsVisualized,
			}}
		>
			{children}
		</PathFindingContext.Provider>
	);
};
