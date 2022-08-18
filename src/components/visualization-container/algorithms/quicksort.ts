import { Animation } from "../visualization-container";

export const quickSort = (arr: number[]) => {
  if(arr.length <= 1) return arr;

  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}

const quickSortHelper = (arr: number[], left: number, right: number) => {
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
    //sort left and right
    quickSortHelper(arr, left, partitionIndex - 1);
    quickSortHelper(arr, partitionIndex + 1, right);
  }
}

const partition = (arr: number[], pivot: number, left: number, right: number) => {
    let pivotValue = arr[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(arr[i] < pivotValue){
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, pivot, partitionIndex);
    return partitionIndex;
}

const swap = (arr: number[], a: number, b: number) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}