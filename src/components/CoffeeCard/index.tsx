import { 
    CartContainerButton, 
    CoffeeCardContainer, 
    CoffeeDescription, 
    CoffeeImage, 
    CoffeePrice, 
    CoffeePriceQuantityCartContainer, 
    CoffeeQuantityContainer, 
    CoffeeTitle, 
    Tag, 
    TagsContainer 
} from './styles';
import ShoppingCartSimple from "../../assets/ShoppingCartSimple.svg";
import { useCart } from '../../context/CartContext';

export type CoffeetTag = 'TRADITIONAL' | 'ICE' | 'WITH MILK' | 'SPECIAL' | 'ALCOHOLIC'
export type Coffee = {
    id: string
    image: string
    tag: CoffeetTag[]
    title: string
    description: string
    price: number
    quantity: number
}


export interface CoffeeCardProps {
    coffee: Coffee;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    updateCart: (coffee: Coffee) => void;

}

export function CoffeeCard({ coffee, increaseQuantity, decreaseQuantity, updateCart }: CoffeeCardProps) {

    const { shoppingCart } = useCart();
    const getShoppingCartQuantityForTheCoffee = (id: string) => {
        return shoppingCart.find((coffee) => coffee.id === id)?.quantity || 0;
    }
    return (
        <CoffeeCardContainer>
            <CoffeeImage src={coffee.image} alt="" />
            <TagsContainer>
                {coffee.tag.map((tag) => (
                    <Tag key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                ))}
            </TagsContainer>
            <CoffeeTitle>
                {coffee.title}
            </CoffeeTitle>
            <CoffeeDescription>
                {coffee.description}            
            </CoffeeDescription>
            <CoffeePriceQuantityCartContainer>
                <CoffeePrice>
                    <p>
                        R$
                    </p>
                    <strong>
                        {coffee.price.toFixed(2)}
                    </strong>
                </CoffeePrice>
                <div>
                    <CoffeeQuantityContainer>
                        <button onClick={coffee.quantity > 0 ? () => decreaseQuantity(coffee.id) : () => {}}>
                            -
                        </button>
                        <span>
                            {getShoppingCartQuantityForTheCoffee(coffee.id)}
                        </span>
                        <button onClick={() => increaseQuantity(coffee.id)}>
                            +
                        </button>
                    </CoffeeQuantityContainer>
                    <CartContainerButton onClick={() => updateCart(coffee)}>
                        <img src={ShoppingCartSimple} alt="shopping cart icon"/>
                    </CartContainerButton>
                </div>
            </CoffeePriceQuantityCartContainer>
        </CoffeeCardContainer>
    )
}

