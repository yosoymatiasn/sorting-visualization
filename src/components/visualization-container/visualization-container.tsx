import { FC, useEffect, useState } from "react";

import { quickSort } from "./algorithms/quicksort";
import Button from "../button/button.component";
import ControlPanel from "../control-panel/control-panel.component";
import { ArrayBar, ArrayVisualization } from "./visualization-container.styles";

export type Animation = {
	comparison: [number, number];
	swap: [number, number];
};

type Props = {};

const Visualization: FC<Props> = () => {
	const [array, setArray] = useState<number[]>([1, 2]);

	useEffect(() => {
		resetArray();
	}, []);

	const resetArray = () => {
		const arr = [];
		for (let i = 0; i < 40; i++) {
			arr.push(randomIntFromInterval(5, 700));
		}
		setArray(arr);
	};

	const runQuickSort = () => {
		setArray([...quickSort(array)]);
	};

	return (
		<>
			<ArrayVisualization>
				{array.map((value: number, idx: number) => (
					<ArrayBar key={idx} height={value}></ArrayBar>
				))}
			</ArrayVisualization>

			<ControlPanel>
				<Button onClick={resetArray}>Randomize</Button>
				<Button onClick={runQuickSort}>Quick Sort</Button>
			</ControlPanel>
		</>
	);
};

export default Visualization;

function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
