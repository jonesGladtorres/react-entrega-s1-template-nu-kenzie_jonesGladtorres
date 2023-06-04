import styled from "styled-components";

export const StyledCard = styled.li`
    background-color: var(--color-grey-1);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    height: 5.4375rem;
    padding: 0 0.9375rem;
    border-left: ${({ type }) => type === "Entrada" ? '5px solid var(--color-color-secondary)' : '5px solid var(--color-grey-2)'};
    :hover{
        transition: 0.3s;
        box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
        background-color: var(--color-grey-1);
    }
`

export const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const StyledDiv2 = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.9375rem;
    flex-direction: column;
`

export const StyledTitle = styled.h2`
    font-size: var(--font-size-3);
    font-weight: 700;
    color: var(--color-grey-3);
`

export const StyledParagraph = styled.p`
    font-size: var(--font-size-4);
    color: var(--color-grey-3);
`
export const StyledButtonsCards = styled.button`
    background-color: var(--color-grey-2);
    border: none;
    height: 1.4375rem;
    border-radius: 5px;
    color: var(--color-grey-3);
    font-size: var(--font-size-4);
    
    cursor: pointer;
    :hover{
        background-color: var(--color-grey-3);
        color: var(--color-grey-1);
        transition: 0.3s;
    }
`