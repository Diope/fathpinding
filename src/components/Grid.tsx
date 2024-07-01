import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAX_COL, MAX_ROW } from "../utils/constants";
import { Tile } from "./Tile";

export function Grid() {
	const { grid } = usePathFinding();
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
			{grid.map((row, idx) => (
				<div key={idx} className="flex">
					{row.map((tile, idx) => {
						const { isStart, isEnd, isVisited, isWall, isPath } = tile;
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
							/>
						);
					})}
				</div>
			))}
		</div>
	);
}
