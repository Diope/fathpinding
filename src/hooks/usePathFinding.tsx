import { useContext } from "react";
import { PathFindingContext } from "../context/PathFindingContext";

export const usePathFinding = () => {
	const context = useContext(PathFindingContext);
	if (!context) {throw new Error("Cannot find PathFindingProvider")}

    return context;

};
