import { Coffee } from "../CoffeeCard";
import {
  ButtonRemoveContainer,
  CoffeeCardContainer,
  CoffeeImage,
  CoffeePrice,
  CoffeePriceQuantityCartContainer,
  CoffeeQuantityContainer,
  CoffeeTitle,
  ImageColumn,
  PriceColumn,
  TitleColumn,
} from "./styles";
import binIcon from "../../assets/icons/bin-icon.svg";

export interface CheckoutCoffeeItemProps {
  coffee: Coffee;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  updateCart?: (coffee: Coffee) => void;
  removeCoffeeItem: (id: string) => void;
}

export function CheckoutCoffeeItem({
  coffee,
  increaseQuantity,
  decreaseQuantity,
  removeCoffeeItem,
}: CheckoutCoffeeItemProps) {
  return (
    <CoffeeCardContainer>
      <ImageColumn>
        <CoffeeImage src={coffee.image} alt="" />
      </ImageColumn>
      <TitleColumn>
        <CoffeeTitle>{coffee.title}</CoffeeTitle>
        <CoffeePriceQuantityCartContainer>
          <div>
            <CoffeeQuantityContainer>
              <div
                onClick={
                  coffee.quantity > 0
                    ? () => decreaseQuantity(coffee.id)
                    : () => {}
                }
              >
                -
              </div>
              <span>{coffee.quantity}</span>
              <div onClick={() => increaseQuantity(coffee.id)}>+</div>
            </CoffeeQuantityContainer>
            <ButtonRemoveContainer>
              <img src={binIcon} alt="" />
              <div onClick={() => removeCoffeeItem(coffee.id)}>
                <p>Remove</p>
              </div>
            </ButtonRemoveContainer>
          </div>
        </CoffeePriceQuantityCartContainer>
      </TitleColumn>
      <PriceColumn>
        <CoffeePrice>
          <p>R$</p>
          <strong>{(coffee.price * coffee.quantity).toFixed(2)}</strong>
        </CoffeePrice>
      </PriceColumn>
    </CoffeeCardContainer>
  );
}
