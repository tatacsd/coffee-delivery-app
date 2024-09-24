import { CheckoutCoffeeItem } from "../../components/CheckoutCoffeeItem";
import { useCart } from "../../context/CartContext";
import {
  CheckoutContainer,
  Title,
  Section,
  CoffeeItemsSection,
  ItemSummary,
  ConfirmButton,
  TotaContainerWrapper,
  AddressContainerWrapper,
  AddressTitleContainer,
  Subtitle,
  PaymentSection,
  PaymentTitleContainer,
  ButtonsContainerWrapper,
  PaymentButton,
  TextInput,
  TextInputContainer,
  TextInputContainerWrapper,
  OptionalLabel,
  FieldsContainer,
  TitleHeader,
} from "./styles";
import locationIcon from "../../assets/icons/location-icon.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import bankIcon from "../../assets/payment-method/bank-icon.png";
import creditCardIcon from "../../assets/payment-method/card-icon.png";
import moneySignIcon from "../../assets/payment-method/money-sign-icon.png";
import cashIcon from "../../assets/payment-method/cash-icon.png";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export type PaymentType = "credit" | "debit" | "money" | "none";

export type PaymentMethod = {
  paymentType: PaymentType;
  imgURL: string;
};

const paymentsMethods: PaymentMethod[] = [
  {
    paymentType: "credit",
    imgURL: creditCardIcon,
  },
  {
    paymentType: "debit",
    imgURL: bankIcon,
  },
  {
    paymentType: "money",
    imgURL: cashIcon,
  },
];

const schema = z.object({
  zipCode: z.string().min(5, "Zip code is required"),
  street: z.string().nonempty("Street is required"),
  number: z.string().nonempty("Number is required"),
  complement: z.string().optional(),
  neighborhood: z.string().nonempty("Neighborhood is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
});

type FormData = z.infer<typeof schema>;



export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentType>("none");
  const {
    shoppingCart,
    increaseQuantity,
    decreaseQuantity,
    removeCoffeeItem,
    updateCart,
  } = useCart();
  const navigate = useNavigate();



 // when a user add or remove from a cart, update the cart
    useEffect(() => {
    localStorage.setItem(
      "CoffeeDeliveryApp-v1-shoppingCart",
      JSON.stringify(shoppingCart)
    );
    }, [shoppingCart, updateCart]);


  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (selectedPaymentMethod === "none") {
      alert("Selecione um método de pagamento");
      return;
    }

    localStorage.setItem(
      "CoffeeDeliveryApp-v1-user-address",
      JSON.stringify(data)
    );
    localStorage.setItem(
      "CoffeeDeliveryApp-v1-user-payment",
      JSON.stringify(selectedPaymentMethod)
    );
    // Proceed to confirmation or next steps
    navigate("/success");

  };

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <TitleHeader>Complete seu pedido</TitleHeader>

        <AddressContainerWrapper>
          <AddressTitleContainer>
            <div>
              <img src={locationIcon} alt="" />
            </div>
            <div>
              <Title>Endereço de entrega</Title>
              <Subtitle>
                Informe o endereço onde deseja receber seu pedido
              </Subtitle>
            </div>
          </AddressTitleContainer>
          <FieldsContainer>
            <TextInputContainer>
              <TextInput
                type="text"
                placeholder="CEP"
                {...register("zipCode")}
                required
              />
              {errors.zipCode && <p>{errors.zipCode.message}</p>}
            </TextInputContainer>
            <TextInputContainer>
              <TextInput
                type="text"
                placeholder="Rua"
                {...register("street")}
                required
              />
              {errors.street && <p>{errors.street.message}</p>}
            </TextInputContainer>
            <TextInputContainerWrapper $variant="two">
              <TextInputContainer>
                <TextInput
                  type="text"
                  placeholder="Número"
                  {...register("number")}
                  required
                />
                {errors.number && <p>{errors.number.message}</p>}
                <div>
                  <TextInput
                    type="text"
                    placeholder="Complemento"
                    {...register("complement")}
                  />
                  <OptionalLabel>Optional</OptionalLabel>
                </div>
              </TextInputContainer>
            </TextInputContainerWrapper>
            <TextInputContainerWrapper>
              <TextInputContainer>
                <TextInput
                  type="text"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                  required
                />
                {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
              </TextInputContainer>
              <TextInputContainer>
                <TextInput
                  type="text"
                  placeholder="Cidade"
                  {...register("city")}
                  required
                />
                {errors.city && <p>{errors.city.message}</p>}
              </TextInputContainer>
              <TextInputContainer>
                <TextInput
                  type="text"
                  placeholder="UF"
                  {...register("state")}
                  required
                />
                {errors.state && <p>{errors.state.message}</p>}
              </TextInputContainer>
            </TextInputContainerWrapper>
          </FieldsContainer>
        </AddressContainerWrapper>

        <PaymentSection>
          <PaymentTitleContainer>
            <div>
              <img src={moneySignIcon} alt="" />
            </div>
            <div>
              <Title>Pagamento</Title>
              <Subtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Subtitle>
            </div>
          </PaymentTitleContainer>
          <ButtonsContainerWrapper>
            {paymentsMethods.map((paymentMethod) => (
              <PaymentButton
                onClick={() =>
                  setSelectedPaymentMethod(
                    paymentMethod.paymentType as PaymentType
                  )
                }
                $isMethodSelected={
                  selectedPaymentMethod === paymentMethod.paymentType
                }
                key={paymentMethod.paymentType}
              >
                <img
                  src={paymentMethod.imgURL}
                  alt={paymentMethod.paymentType}
                />
                <p>{paymentMethod.paymentType.toUpperCase()}</p>
              </PaymentButton>
            ))}
          </ButtonsContainerWrapper>
        </PaymentSection>
      </Section>

      {/* Cafés selecionados */}
      <div>
        <TitleHeader>Cafés selecionados</TitleHeader>
        <CoffeeItemsSection>
          <div>
            {shoppingCart.map((coffee) => (
              <CheckoutCoffeeItem
                coffee={coffee}
                key={coffee.title}
                increaseQuantity={() => increaseQuantity(coffee.title)}
                decreaseQuantity={() => decreaseQuantity(coffee.title)}
                removeCoffeeItem={() => removeCoffeeItem(coffee.title)}
              />
            ))}
            <ItemSummary>
              <div>
                <p>Total items</p>{" "}
                <p>
                  R${" "}
                  {shoppingCart
                    .reduce(
                      (acc, coffee) =>
                        acc + coffee.price * (coffee.quantity || 0),
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div>
                <p>Entrega</p> <p>R$ 5.99</p>
              </div>
              <TotaContainerWrapper>
                <p>Total</p> <p>{`R$ ${
                  shoppingCart
                    .reduce(
                      (acc, coffee) =>
                        acc + coffee.price * (coffee.quantity || 0),
                      0
                    ) + 5.99
                }`}</p>
              </TotaContainerWrapper>
            </ItemSummary>
            <div>
              <ConfirmButton>{`confirmar pedido`.toUpperCase()}</ConfirmButton>
            </div>
          </div>
        </CoffeeItemsSection>
      </div>
    </CheckoutContainer>
  );
}
