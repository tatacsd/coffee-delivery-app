import { CartContainer, HeaderContainer, LocationContainer, LogoCoffeeDeliveryImage} from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffee-delivery.svg";
import shoppingCartFill from "../../assets/shopping-cart-fill.svg";
import mapPin from "../../assets/map-pin-line-regular.svg";

export function Header () {
    const hasItemsInCart = false;

    return(
        <HeaderContainer>
            <LogoCoffeeDeliveryImage href="/">

            <img src={logoCoffeDelivery} alt="Logo Coffee Delivery" />
            </LogoCoffeeDeliveryImage>
            

            <nav>
                <LocationContainer>
                        <img src={mapPin} alt="map pin icon" />
                    
                        <span>
                            Vancouver, BC
                        </span>
                </LocationContainer>
                <CartContainer href="/checkout">
                    {hasItemsInCart && <span>3</span>}
                    <img src={shoppingCartFill} alt="shopping cart icon"/>
                </CartContainer>
            </nav>
        </HeaderContainer>
    )
}