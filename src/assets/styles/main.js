import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 3.125rem;

    @media (max-width: 425px) {
        width: 100vw;
        padding: 15px;
        flex-direction: column;
        align-items: center;
    }

`