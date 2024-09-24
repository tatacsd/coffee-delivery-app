import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    max-width: 74rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    @media (max-width: 1023px) {
        max-width: 100%;
        padding: 0 1rem;
        
  }
`;