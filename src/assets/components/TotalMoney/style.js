import styled, {css} from "styled-components";

export const StyledMoneyContainer = styled.div`
    display: flex;
    padding: 25px;
    border: 1px solid var(--color-grey-2);
    justify-content: space-between;
    font-family: var(--family-dafult);
`

const StyledMoneyTextTop = css`
    font-weight: 700;
    font-size: var(--font-size-3);
`

export const StyledTitleTotalMoney = styled.h2`
    ${StyledMoneyTextTop}
    color: var(--color-grey-3);
`

export const StyledValueTotalMoney = styled.h2`
    ${StyledMoneyTextTop}
    color: var(--color-color-primary-2);
`

export const StyledParagraphTotalMoney = styled.p`
    font-size: var(--font-size-4);

`

export const StyledDivTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

