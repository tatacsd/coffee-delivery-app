import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1023px) {
    padding: 1rem;
    flex-direction: column; 
    gap: 1rem; 
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const TitleHeader = styled.p`
  font-size: ${(props) => props.theme.fonts.fontSize.textL};
  color: ${(props) => props.theme.color.base["base-title"]};

  @media (max-width: 1023px) {
    font-size: ${(props) => props.theme.fonts.fontSize.textM}; 
  }
`;

export const AddressContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.base["base-card"]};

  @media (max-width: 1023px) {
    padding: 1rem; 
  }
`;

export const FieldsContainer = styled.div``;

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.base["base-card"]};

  @media (max-width: 1023px) {
    padding: 1rem; 
  }
`;

export const Title = styled.p`
  font-size: ${(props) => props.theme.fonts.fontSize.textM};
  color: ${(props) => props.theme.color.base["base-subtitle"]};


`;

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fonts.fontSize.textS};
  color: ${(props) => props.theme.color.base["base-text"]};

`;

export const AddressTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1023px) {
    align-items: flex-start;
  }
`;

export const PaymentTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1023px) {
    align-items: flex-start;
  }
`;

export const TextInputContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;

  @media (max-width: 1023px) {
    flex-direction: column; 
  }
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.base["base-button"]};
  background-color: ${(props) => props.theme.color.base["base-input"]};
  color: ${(props) => props.theme.color.base["base-text"]};
  font-size: ${(props) => props.theme.fonts.fontSize.textS};
  margin: 0.5rem 0;
  padding: 1rem;

  &:focus {
    border-color: ${(props) => props.theme.color.product["yellow-dark"]};
    outline: none;
  }

  &:not(:placeholder-shown) {
    border-color: ${(props) => props.theme.color.product["yellow-dark"]};
  }

  @media (max-width: 1023px) {
    padding: 0.75rem; 
  }
`;

export type TextInputContainerWrapperVariant = "two";

export interface TextInputContainerWrapperProps {
  $variant?: TextInputContainerWrapperVariant;
}

export const TextInputContainerWrapper = styled.div<TextInputContainerWrapperProps>`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & > div > input {
    ${({ $variant }) =>
      $variant === "two" &&
      `
            &:first-child {
                width: 30%;
            }
        `}
  }

  & > div > div {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  @media (max-width: 1023px) {
    flex-direction: column; 
  }
`;

export const OptionalLabel = styled.span`
  font-size: ${(props) => props.theme.fonts.fontSize.textSX};
  color: ${(props) => props.theme.color.base["base-label"]};
  position: absolute;
  top: 1.5rem;
  right: 1rem;
`;

export const ButtonsContainerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1023px) {
    flex-direction: column; 
  }
`;

export interface PaymentButtonProps {
  $isMethodSelected: boolean;
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  width: 33%;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 5px;
  border: ${(props) =>
    props.$isMethodSelected
      ? `1px solid ${props.theme.color.product["purple"]}`
      : "none"};
  background-color: ${(props) =>
    props.$isMethodSelected
      ? props.theme.color.product["purple-light"]
      : props.theme.color.base["base-button"]};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$isMethodSelected ? "none" : props.theme.color.base["base-hover"]};
  }

  img {
    width: 22px;
    height: 22px;
  }

  p {
    font-size: ${(props) => props.theme.fonts.fontSize.textSX};
    color: ${(props) => props.theme.color.base["base-text"]};
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const CoffeeItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  margin-top: 1rem;
  border-radius: 5px 30px 5px 30px;
  background-color: ${(props) => props.theme.color.base["base-card"]};

  @media (max-width: 1023px) {
    padding: 1rem; 
  }
`;

export const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 448px;
  margin: 1rem 0;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: ${(props) => props.theme.fonts.fontSize.textS};
      color: ${(props) => props.theme.color.base["base-text"]};
    }
  }

  @media (max-width: 1023px) {
    width: 100%; 
  }
`;

export const TotaContainerWrapper = styled.div`
  p {
    font-size: ${(props) => props.theme.fonts.fontSize.textL};
    color: ${(props) => props.theme.color.base["base-subtitle"]};
    font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.product.yellow};
  color: ${(props) => props.theme.color.base.white};
  border: none;
  font-size: ${(props) => props.theme.fonts.fontSize.textM};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.product["yellow-dark"]};
  }

  @media (max-width: 1023px) {
    font-size: ${(props) => props.theme.fonts.fontSize.textS}; 
    padding: 0.75rem; 
  }
`;
