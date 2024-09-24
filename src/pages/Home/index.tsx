import { CoffeeCard } from "../../components/CoffeeCard";
import { HeroSection } from "../../components/HeroSection";
import { useCart } from "../../context/CartContext";
import { HomeMainContent } from "./styles";

export function Home() {
  const {
    coffees,
    increaseQuantity,
    decreaseQuantity,
    updateCart,
  } = useCart();

  return (
    <div>
      <HeroSection />
      <HomeMainContent>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            increaseQuantity={() => increaseQuantity(coffee.id)}
            decreaseQuantity={() => decreaseQuantity(coffee.id)}
            updateCart={() => updateCart(coffee)}
          />
        ))}
      </HomeMainContent>
    </div>
  );
}
