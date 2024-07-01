import "./App.css";
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
	return (
		<PathFindingProvider>
			<TileProvider>
				<SpeedProvider>
					<h1>This is a test</h1>
				</SpeedProvider>
			</TileProvider>
		</PathFindingProvider>
	);
}

export default App;
