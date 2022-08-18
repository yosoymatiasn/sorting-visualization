import styled from "styled-components";

export const ArrayVisualization = styled.div` 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2px;
    width: 100%;

`;

export const ArrayBar = styled.div<{height: number}>` 
    background: pink;
    /* padding: 1em; */
    width: .8rem;
    height: ${({height}) => height}px;
`;