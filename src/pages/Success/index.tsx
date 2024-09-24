import illustratorDeliveryMotoIMG from "../../assets/Illustration-delivery-moto.svg";
import successIconEta from "../../assets/icons/success-Icon-eta.svg";
import successIconLocation from "../../assets/icons/Icon-location.svg";
import successIconPayment from "../../assets/icons/success-payment-method-icon.svg";
import { SectionContent, SectionImage, SuccessContainer, SuccessItem, SuccessItemsContainer } from "./styles";
import { useEffect, useState } from "react";
import { FormDataPayload, PaymentType } from "../Checkout";

export function Success() {
  const [address, setAddress] = useState<FormDataPayload>(
    {} as FormDataPayload
  );
  const [userPaymentMethod, setUserPaymentMethod] =
    useState<PaymentType>("none");

  useEffect(() => {
    const address = localStorage.getItem("CoffeeDeliveryApp-v1-user-address");
    const userPaymentMethod = localStorage.getItem(
      "CoffeeDeliveryApp-v1-user-payment"
    );

    if (address) {
      setAddress(JSON.parse(address));
    }
    if (userPaymentMethod) {
      setUserPaymentMethod(JSON.parse(userPaymentMethod));
    }
  }, []);

  return (
    <SuccessContainer>
      <SectionContent>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <SuccessItemsContainer>
          <SuccessItem>
            <img src={successIconLocation} alt="" />
            <div>

            <p>
              Entrega em{" "}
              <strong>
                {address.street}, {address.number}{" "}
                {address.complement ? " - " + address.complement : ""}
              </strong>
              - {address.neighborhood} - {address.city}, {address.state}
            </p>
            </div>
          </SuccessItem>
          <SuccessItem>
            <img src={successIconEta} alt="" />
            <div>

            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
            </div>
          </SuccessItem>
          <SuccessItem>
            <img src={successIconPayment} alt="" />
            <div>

            <p>Pagamento na entrega</p>
            <p>
              <strong>{userPaymentMethod}</strong>
            </p>
            </div>
          </SuccessItem>
        </SuccessItemsContainer>
      </SectionContent>
      <SectionImage>
        <div>

        <img src={illustratorDeliveryMotoIMG} alt="" />
        </div>
      </SectionImage>
    </SuccessContainer>
  );
}
