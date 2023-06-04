import styled, {css} from "styled-components";

const InputDefultStyle = css`
    font-family: var(--family-dafult);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-3);
    background-color: var(--color-grey-1);
    padding: 0 0.9375rem;
    height: 3.125rem;
    outline: none;
    border: none;
    background-color: var(--color-grey-1);
    border-radius: 8px;
`

export const StyledInput = styled.input`
    ${InputDefultStyle}
`

export const StyledSelect = styled.select`
    ${InputDefultStyle}
    font-size: var(--font-size-3);
`

export const StyledHelperText = styled.span`
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-2);
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-2);
`

export const StyleLabel = styled.label`
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-2);
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-3);
`

export const StyledButton = styled.button`
    height: 3rem;
    background-color: var(--color-color-primary);
    color: var(--color-grey-1);
    border: none;
    border-radius: 0.5rem;
    font-size: var(--font-size-3);
    font-family: 'Inter';

    :hover{
        background-color: var(--color-color-primary-2);
        cursor: pointer;
        transition: 0.3s;
    }
`