import { Selector } from "./Selector";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAZES } from "../utils/constants";
import { MazeType } from "../utils/types";
import { useTile } from "../hooks/useTile";
import { resetGrid } from "../utils/resetGrid";
import { useState } from "react";
import { runAlgorithm } from "../utils/runAlgorithm";
import { useSpeed } from "../hooks/useSpeed";

export const Nav = () => {
	const { maze, setMaze, grid } = usePathFinding();
	const { startTile, endTile } = useTile();
	const [isDisabled, setIsDisabled] = useState(false);
	const { speed } = useSpeed();
	const handleMazeGeneration = (maze: MazeType) => {
		if (maze === "NONE") {
			console.log("This is handleMazeGen I do work! Keep testing");
			setMaze(maze);
			resetGrid({ grid, startTile, endTile });
			return;
		}
		setMaze(maze);
		setIsDisabled(true);
		runAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });
	};
	return (
		<div className="flex items-center justify-center min-h-[4.5rem] border-b border-gray-400 sm:px-5 px-0">
			<div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
				<h2>Pathfinding Visualizer</h2>
				<div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col">
					<Selector
						label="Maze"
						value={maze}
						options={MAZES}
						onChange={(e) => {
							handleMazeGeneration(e.target.value as MazeType);
						}}
					/>
				</div>
			</div>
		</div>
	);
};
