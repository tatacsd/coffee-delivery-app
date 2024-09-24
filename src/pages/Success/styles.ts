import styled from "styled-components";


export const SuccessContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;

    @media (max-width: 1023px) {
        flex-direction: column;
        gap: 1rem;
        padding-top: 1rem;
    }
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: ${({ theme }) => theme.fonts.fontSize.titleL};
        color: ${({ theme }) => theme.color.product["yellow-dark"]};
        font-family: ${({ theme }) => theme.fonts.fontFamily.title};
    }

    p {
        font-size: ${({ theme }) => theme.fonts.fontSize.textL};
        color: ${({ theme }) => theme.color.base["base-subtitle"]};
        font-family: ${({ theme }) => theme.fonts.fontFamily.text};
    }
`;

// This item was challenging to style because of the gradient border.
export const SuccessItemsContainer = styled.div`

    position: relative;
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    gap: 2.5rem;
    padding: 3rem;
    background-color: ${({ theme }) => theme.color.base["white"]};
    
    border-radius: 10px 50px 10px 50px;  /* top-left, top-right, bottom-right, bottom-left */
    z-index: 1; 
    

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        border-radius: 10px 50px 10px 50px;  /* top-left, top-right, bottom-right, bottom-left */
        padding: 2px; 
        background: linear-gradient(to right, #DBAC2C, #8047F8); 

        /* Create the inner container with solid background */
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
`;


export const SuccessItem = styled.div`
    display: flex;
    border: none;
    flex-direction: row;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
`;

export const SectionImage = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    height: 28rem;

    img {
        width: 32rem;
        height: 20rem;
    }
`;