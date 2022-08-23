import { AnimationProps, BarStates } from "../visualization-container";
import { sleep, swap } from "./algorithms.utils";

export const quickSort = async (arr: number[], animationProps: AnimationProps) => {

  await quickSortHelper(arr, 0, arr.length - 1, animationProps);
}

const quickSortHelper = async (arr: number[], left: number, right: number, animationProps: AnimationProps) => {
  const {states, setStates } = animationProps;
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = await partition(arr, pivot, left, right, animationProps);

    // set final position animation
    states[partitionIndex] = BarStates.IS_FINAL;
    setStates([...states]);
    
    //sort left and right
    await Promise.all([quickSortHelper(arr, left, partitionIndex - 1, animationProps),
    quickSortHelper(arr, partitionIndex + 1, right, animationProps)])
  } else {
    // set final position animation
    states[left] = BarStates.IS_FINAL;
    setStates([...states]);
  }
}

const partition = async (arr: number[], pivot: number, left: number, right: number, animationProps: AnimationProps) => {
    const {states, setStates, setArray, speed} = animationProps;
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    // set partition animation
    states[partitionIndex] = BarStates.IS_PARTITION;
    setStates([...states]);

    // set pivot animation
    states[pivot] = BarStates.IS_PIVOT;
    setStates([...states]);
  
    for(let i = left; i < right; i++) {
      //set non pivot animation
      if(i !== pivot && i !== partitionIndex) {
        states[i] = BarStates.IS_BEING_COMPARED;
        setStates([...states]);
      }

      if(arr[i] < pivotValue){
        await sleep(speed);
        swap(arr, i, partitionIndex, setArray);

        // remove previous partition animation
        states[partitionIndex] = BarStates.BASE;
        setStates([...states]);

        partitionIndex++;

        // set new partition animation
        states[partitionIndex] = BarStates.IS_PARTITION;
        setStates([...states]);
      }

      // remove non pivot animation
      if(i !== pivot && i !== partitionIndex) {
        states[i] = BarStates.BASE;
        setStates([...states]);
      }
    }
    
    await sleep(speed);
    swap(arr, pivot, partitionIndex, setArray);

    
    // remove pivot animation
    states[pivot] = BarStates.BASE;
    setStates([...states]);

    return partitionIndex;
}
