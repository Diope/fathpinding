export function RunButton({
	handleRunningVisualization,
	isDisabled,
	isGraphVisualized,
}: {
	handleRunningVisualization: () => void;
	isDisabled: boolean;
	isGraphVisualized: boolean;
}) {
	return (
		<button
			disabled={isDisabled || isGraphVisualized}
			className=" disabled:pointer-events-none disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={handleRunningVisualization}
		>
			{isGraphVisualized ? "Clear" : "Run"}
		</button>
	);
}
