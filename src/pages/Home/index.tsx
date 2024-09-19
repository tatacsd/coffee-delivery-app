import { CoffeeCard } from '../../components/CoffeeCard';
import { HeroSection } from '../../components/HeroSection';
import { useCart } from '../../context/CartContext';
import { HomeMainContent } from './styles';

export function Home() {
    const { coffees, shoppingCart, increaseQuantity, decreaseQuantity, updateCart } = useCart();

    return (
        <div>
            <HeroSection />
            <HomeMainContent>
                {coffees.map((coffee) => (
                    <CoffeeCard 
                        key={coffee.title} 
                        coffee={coffee}
                        increaseQuantity={() => increaseQuantity(coffee.title)} 
                        decreaseQuantity={() => decreaseQuantity(coffee.title)} 
                        updateCart={() => updateCart(coffee)} 
                    />
                ))}
            </HomeMainContent>
   </div>
    );
}
