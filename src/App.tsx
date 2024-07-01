import "./App.css";
import { PathFindingProvider } from "./context/PathFindingContext";

function App() {
	return (
		<PathFindingProvider>
			<h1>This is a test</h1>
		</PathFindingProvider>
	);
}

export default App;
