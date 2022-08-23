import { FC, useEffect, useState } from "react";

import { quickSort } from "./algorithms/quickSort";
import { mergeSort } from "./algorithms/mergeSort";
import Button from "../button/button.component";
import ControlPanel from "../control-panel/control-panel.component";
import { ArrayBar, ArrayVisualization } from "./visualization-container.styles";

// global vars
const minRange = 5;
const mySpeed = 1;
const myCount = 50;
const myRange = 600;

export enum BarStates {
	BASE = -1,
	IS_BEING_COMPARED = 0,
	IS_PIVOT = 1,
	IS_PARTITION = 2,
	IS_FINAL = 3,
}

export type AnimationProps = {
	states: number[];
	setStates: (_: any) => void;
	setArray: (_: any) => void;
	speed: number;
};

type Props = {};

const Visualization: FC<Props> = () => {
	const [maxRange, setMaxRange] = useState<number>(myRange);
	const [count, setCount] = useState<number>(myCount);
	const [speed, setSpeed] = useState<number>(mySpeed);
	const [array, setArray] = useState<number[]>([]);
	const [states, setStates] = useState<number[]>([]);

	useEffect(() => {
		resetArray();
	}, []);

	const resetArray = () => {
		const arr = [];
		for (let i = 0; i < count; i++) {
			arr.push(randomIntFromInterval(minRange, maxRange));
		}
		setArray(arr);
		setStates(new Array(array.length).fill(BarStates.BASE));
	};

	const getSortProps = () => {
		return {
			states,
			setArray,
			setStates,
			speed: speed * 100,
		};
	};

	const getBarState = (state: BarStates = BarStates.BASE) => {
		if (state === BarStates.IS_BEING_COMPARED) return "compare";
		else if (state === BarStates.IS_PIVOT) return "pivot";
		else if (state === BarStates.IS_PARTITION) return "partition";
		else if (state === BarStates.IS_FINAL) return "final";
		else return "";
	};

	const runQuickSort = async () => {
		const sortedArray = await quickSort(array, getSortProps());
	};

	const runMergeSort = async () => {
		const sortedArray = await mergeSort(array, getSortProps());
	};

	return (
		<>
			<ArrayVisualization>
				{array.map((value: number, idx: number) => {
					const barState = states[idx];
					return (
						<ArrayBar
							key={idx}
							height={value}
							className={getBarState(barState)}
						></ArrayBar>
					);
				})}
			</ArrayVisualization>

			<ControlPanel>
				<Button onClick={resetArray}>Randomize</Button>
				<Button onClick={runQuickSort}>Quick Sort</Button>
				<Button onClick={runMergeSort}>Merge Sort</Button>
			</ControlPanel>
		</>
	);
};

export default Visualization;

function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
