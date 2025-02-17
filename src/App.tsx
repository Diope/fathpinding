import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { Nav } from "./components/Nav";

function App() {
	const isRunningRef = useRef(false);
	return (
		<PathFindingProvider>
			<TileProvider>
				<SpeedProvider>
					<div className="h-screen w-screen flex flex-col">
						<Nav />
						<Grid isRunningRef={isRunningRef} />
					</div>
				</SpeedProvider>
			</TileProvider>
		</PathFindingProvider>
	);
}

export default App;
