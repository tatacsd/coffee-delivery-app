import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  gap: 1rem;

  border-bottom: 1px ${(props) => props.theme.color.base["base-button"]} solid;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1/3;
`;

export const CoffeeImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const CoffeeTitle = styled.p`
  font-size: ${(props) => props.theme.fonts.fontSize.textM};
  font-weight: ${(props) => props.theme.fonts.fontWeight.regular};
  color: ${(props) => props.theme.color.base["base-subtitle"]};
`;

export const CoffeePriceQuantityCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 208px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 0.5rem;
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

  @media (max-width: 1023px) {
    strong {
      font-size: ${(props) => props.theme.fonts.fontSize.textS};
    }
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
  gap: 1rem;
  border-radius: 5px;

  div {
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

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  width: 1/3;
  text-align: left;

  @media (max-width: 1023px) {
    width: 100%;
    align-items: center;
  }
`;

export const PriceColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;
  width: 1/3;
  text-align: right;
`;

export const ButtonRemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.base["base-button"]};
  padding: 0.5rem 0.5rem;
  width: 100px;
  gap: 0.5rem;
  border-radius: 5px;

  div {
    font-size: ${(props) => props.theme.fonts.fontSize.textL};
    color: ${(props) => props.theme.color.product.purple};
    background-color: ${(props) => props.theme.color.base["base-button"]};
    border: none;
    cursor: pointer;
    padding: 0.2rem;
  }

  p {
    font-size: ${(props) => props.theme.fonts.fontSize.textS};
    color: ${(props) => props.theme.color.base["base-title"]};
  }
`;
