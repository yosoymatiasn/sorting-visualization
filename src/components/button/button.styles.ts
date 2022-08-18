import styled from "styled-components";

export const BaseButton = styled.button`
    background-color: lightgrey;
    padding: .4em 1em;
    border-radius: .2em;
    width: auto;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;