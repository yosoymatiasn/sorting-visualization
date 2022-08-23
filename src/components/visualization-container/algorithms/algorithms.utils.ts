export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const swap = (arr: number[], a: number, b: number, setArray: any) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    setArray([...arr])
}