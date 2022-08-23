import styled from "styled-components";

export const ArrayVisualization = styled.div` 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2px;
    width: 100%;

`;

export const ArrayBar = styled.div<{height: number}>` 
    background-color: white;
    width: .8rem;
    height: ${({height}) => height}px;
    transition: background-color .0s ease-in;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;

    &.compare {
        background-color: blue;
    }

    &.pivot {
        background-color: red;
    }

    &.partition {
        background-color: blue;
    }

    &.final {
        background-color: green;
    }
`;