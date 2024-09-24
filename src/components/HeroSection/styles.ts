import styled from "styled-components";

export interface HeroSectionWrapperProps {
    backgroundImg: string;
}

export const HeroSectionWrapper = styled.section<HeroSectionWrapperProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-image: url(${(props) => props.backgroundImg});
    background-size: cover;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.3);

    @media (max-width: 1023px) {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
    
  }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    h1 {
        font-size: ${(props) => props.theme.fonts.fontSize.titleXL};
        color: ${(props) => props.theme.color.base["base-title"]};
        margin-bottom: 2rem;
    }

    p {
        font-size: ${(props) => props.theme.fonts.fontSize.textM};
        color: ${(props) => props.theme.color.base["base-subtitle"]};
        margin-bottom: 2rem;
        max-width: 420px;
        word-wrap: break-word;
    }

    @media (max-width: 1023px) {
        align-items: center;
        text-align: center;
    }
`;

export const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

export const ItemComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;

    p {
        margin-bottom: 0;
        font-size: ${(props) => props.theme.fonts.fontSize.textS};
        color: ${(props) => props.theme.color.base["base-subtitle"]}
    }
`;

export const HeroImageContainer = styled.div`
     @media (max-width: 1023px) {
     img {
            width: 100%;
            height: auto;
     }
  }
`;