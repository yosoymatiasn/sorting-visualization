import { AnimationProps, BarStates } from "../visualization-container";
import { sleep } from "./algorithms.utils";

export const mergeSort =  (arr: number[], animationProps: AnimationProps) => {
    const { setArray } = animationProps;
    const auxiliaryArray = arr.slice();
    
    mergeSortHelper(auxiliaryArray, animationProps)
    // console.log(arr)
}

const mergeSortHelper =  async (auxiliaryArray: number[], animationProps: AnimationProps): Promise<number[]> => {
    const { states, setStates, speed, setArray } = animationProps;

    if (auxiliaryArray.length < 2) return auxiliaryArray;
    const middleIdx = Math.floor(auxiliaryArray.length / 2);

    // set middle animation
    // states[middleIdx] = BarStates.IS_PARTITION;
    // setStates([...states]);

    const left = auxiliaryArray.slice(0, middleIdx);
    const right = auxiliaryArray.slice(middleIdx);

    await sleep(speed);
    const mergedArray = await merge(
        await mergeSortHelper(left, animationProps)!, 
        await mergeSortHelper(right, animationProps)!,
        animationProps
    );
    setArray(mergedArray);

    return mergedArray;
    // await Promise.all([
    // ]);
}

const merge = async (left: number[], right: number[], animationProps: AnimationProps) => {
    const { setArray, states, setStates, speed } = animationProps;

    let resultArray = [], 
        leftIndex = 0, 
        rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
        } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    const mergedArray = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
    
    // await sleep(speed);
    // setArray(mergedArray);
    return mergedArray;
}

/*

*/