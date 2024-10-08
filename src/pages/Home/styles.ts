import styled from "styled-components";

export const HomeMainContent = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    margin: 2rem 0;

    @media (max-width: 1023px) {
        gap: 1rem;
        justify-content: center;
}
`;
