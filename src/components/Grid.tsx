import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAX_COL, MAX_ROW } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid({
	isRunningRef,
}: {
	isRunningRef: MutableRefObject<boolean>;
}) {
	const { grid, setGrid } = usePathFinding();
	const [isMouseDown, setIsMouseDown] = useState(false);

	const handleMouseDown = (row: number, col: number) => {
		if (isRunningRef.current || checkIfStartOrEnd(row, col)) return;
		setIsMouseDown(true);
		const newGrid = createNewGrid(grid, row, col);
		console.log(newGrid, "test");
		setGrid(newGrid);
	};

	const handleMouseUp = (row: number, col: number) => {
		if (isRunningRef.current || checkIfStartOrEnd(row, col)) return;
		setIsMouseDown(false);
	};

	const handleMouseEnter = (row: number, col: number) => {
		if (isRunningRef.current || checkIfStartOrEnd(row, col)) return;
		if (isMouseDown) {
			const newGrid = createNewGrid(grid, row, col);
			setGrid(newGrid);
		}
	};
	return (
		<div
			className={twMerge(
				"flex flex-col items-center justify-center border-sky-200 ",
				// Height
				`lg:min-h-[${MAX_ROW * 15}px] md:min-h-[${MAX_ROW * 15}px] xs:min-h-[${
					MAX_ROW * 8
				}px] min-h-[${MAX_ROW * 7}px]`,
				// Width
				`lg:w-[${MAX_COL * 15}px] md:w-[${MAX_COL * 15}px] xs:w-[${
					MAX_COL * 8
				}] w-[${MAX_COL * 7}px]`
			)}
		>
			{grid.map((r, idx) => (
				<div key={idx} className="flex">
					{r.map((tile, idx) => {
						const { col, row, isStart, isEnd, isVisited, isWall, isPath } =
							tile;
						return (
							<Tile
								key={idx}
								row={tile.row}
								col={tile.col}
								isStart={isStart}
								isEnd={isEnd}
								isVisited={isVisited}
								isWall={isWall}
								isPath={isPath}
								handleMouseDown={() => handleMouseDown(row, col)}
								handleMouseEnter={() => handleMouseEnter(row, col)}
								handleMouseUp={() => handleMouseUp(row, col)}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
}
