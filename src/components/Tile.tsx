import { twMerge } from "tailwind-merge";
import {
	END_TILE_STYLE,
	MAX_ROW,
	PATH_TILE_STYLE,
	START_TILE_STYLE,
	TILE_STYLE,
	VISITED_TILE_STYLE,
	WALL_TILE_STYLE,
} from "../utils/constants";

export function Tile({
	row,
	col,
	isStart,
	isEnd,
	isVisited,
	isWall,
	isPath,
}: {
	row: number;
	col: number;
	isStart: boolean;
	isEnd: boolean;
	isVisited: boolean;
	isWall: boolean;
	isPath: boolean;
}) {
	let tileTypeStyle;
	if (isStart) {
		tileTypeStyle = START_TILE_STYLE;
	} else if (isEnd) {
		tileTypeStyle = END_TILE_STYLE;
	} else if (isVisited) {
		tileTypeStyle = VISITED_TILE_STYLE;
	} else if (isWall) {
		tileTypeStyle = WALL_TILE_STYLE;
	} else if (isPath) {
		tileTypeStyle = PATH_TILE_STYLE;
	} else {
		tileTypeStyle = TILE_STYLE;
	}

	const borderStyle =
		row === MAX_ROW - 1 ? " border-b" : col === 0 ? "border-l" : "";
	const edgeStyle = row === MAX_ROW - 1 && col === 0 ? "border-l" : "";
	return (
		<div
			className={twMerge(tileTypeStyle, borderStyle, edgeStyle)}
			id={`${row}-${col}`}
		/>
	);
}
