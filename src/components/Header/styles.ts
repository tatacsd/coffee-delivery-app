import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const LogoCoffeeDeliveryImage = styled.a`
    img {
        width: 100px;
        height: 40px;
    }
`;


export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.1rem;
    background-color: ${(props) => props.theme.color.product["purple-light"]};
    border-radius: 5px;

    span {
        font-size: ${(props) => props.theme.fonts.fontSize.textS};
        font-weight: ${(props) => props.theme.fonts.fontWeight.regular};
        color: ${(props) => props.theme.color.product["purple-dark"]};
    }

    svg {
        width: 8px;
        height: 8px;
    }
`;

export const CartContainer = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.1rem;
    background-color: ${(props) => props.theme.color.product["yellow-light"]};
    border-radius: 5px;

    img {
        width: 22px;
        height: 22px;
    }

    span {
        /* make it absolute */
        position: absolute;
        top: -10px;
        right: -8px;
        background-color: ${(props) => props.theme.color.product["yellow-dark"]};
        /* make it a circle */
        border-radius: 50%;
        padding: 0.2rem 0.4rem;
        font-size: ${(props) => props.theme.fonts.fontSize.textSX};
        color: ${(props) => props.theme.color.base.white};
        font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
    }

  
`;
