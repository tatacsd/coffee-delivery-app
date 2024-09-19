import traditionalExpressoCoffeeImg from '../../assets/TraditionalEspresso.png';
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

export type CoffeetTag = 'TRADITIONAL' | 'ICE' | 'WITH MILK' | 'SPECIAL' | 'ALCOHOLIC'
export type Coffee = {
    image: string
    tag: CoffeetTag[]
    title: string
    description: string
    price: number
    quantity: number
}


export interface CoffeeCardProps {
    coffee: Coffee;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    updateCart: () => void;
}

export function CoffeeCard({ coffee, increaseQuantity, decreaseQuantity, updateCart }: CoffeeCardProps) {
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
                        <button onClick={coffee.quantity > 0 ? () => decreaseQuantity() : () => {}}>
                            -
                        </button>
                        <span>
                            {coffee.quantity}
                        </span>
                        <button onClick={() => increaseQuantity()}>
                            +
                        </button>
                    </CoffeeQuantityContainer>
                    <CartContainerButton onClick={() => updateCart()}>
                        <img src={ShoppingCartSimple} alt="shopping cart icon"/>
                    </CartContainerButton>
                </div>
            </CoffeePriceQuantityCartContainer>
        </CoffeeCardContainer>
    )
}

