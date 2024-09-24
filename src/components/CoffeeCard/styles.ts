import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    position: relative;
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 1rem 1rem 1rem;
    border-radius: 30px 5px 30px 5px;
    background-color: ${(props) => props.theme.color.base["base-card"]};
`;

export const CoffeeImage = styled.img`
    position: absolute;
    top: -28px;
    width: 100px;
    height: 100px;
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;
export const Tag = styled.span`
    background-color: ${(props) => props.theme.color.product["yellow-light"]};
    color: ${(props) => props.theme.color.product["yellow-dark"]};
    font-size: ${(props) => props.theme.fonts.fontSize.tag};
    font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
    padding: 5px;
    border-radius: 5px;
`;

export const CoffeeTitle = styled.p`
    font-size: ${(props) => props.theme.fonts.fontSize.titleS};
    font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
    color: ${(props) => props.theme.color.base["base-subtitle"]};
    margin: 1rem 0;
`;
export const CoffeeDescription = styled.p`
    font-size: ${(props) => props.theme.fonts.fontSize.textS};
    color: ${(props) => props.theme.color.base["base-label"]};
    margin-bottom: 1rem;
    text-align: center;
`;

export const CoffeePriceQuantityCartContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;
    min-width: 208px;
    margin-top: 1.5rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
    }
`;

export const CoffeePrice = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    p {
        font-size: ${(props) => props.theme.fonts.fontSize.textSX};
        color: ${(props) => props.theme.color.base["base-text"]};
    }

    strong {
        font-size: ${(props) => props.theme.fonts.fontSize.textM};
        color: ${(props) => props.theme.color.base["base-text"]};
    }
`;

export const CoffeeQuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.base["base-button"]};
    padding: 0.5rem 0.5rem;
    width: 72px;
    gap: 0.5rem;
    border-radius: 5px;

    button {
        width: 24px;
        font-size: ${(props) => props.theme.fonts.fontSize.textL};
        color: ${(props) => props.theme.color.product.purple};
        background-color: ${(props) => props.theme.color.base["base-button"]};
        border: none;
        cursor: pointer;

        &:hover {
            color: ${(props) => props.theme.color.product["purple-dark"]};
        }
    }

    span {
        font-size: ${(props) => props.theme.fonts.fontSize.textS};
        color: ${(props) => props.theme.color.base["base-title"]};
    }


`;

export const CartContainerButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.1rem;
    background-color: ${(props) => props.theme.color.product["purple-dark"]};
    border-radius: 5px;
    border: none;
    cursor: pointer;

    img {
        width: 22px;
        height: 22px;
        fill: ${(props) => props.theme.color.base.white};
    }

    &:hover {
        background-color: ${(props) => props.theme.color.product.purple};
    }

`;