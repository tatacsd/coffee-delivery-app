import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Coffee } from '../components/CoffeeCard';
import { coffeeArr } from '../mockData/coffee';

interface CartContextType {
    coffees: Coffee[];
    shoppingCart: Coffee[];
    increaseQuantity: (title: string) => void;
    decreaseQuantity: (title: string) => void;
    updateCart: (coffee: Coffee) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [coffees, setCoffees] = useState<Coffee[]>(() => {
        const savedCoffees = localStorage.getItem('CoffeeDeliveryApp-v1-coffees');
        return savedCoffees ? JSON.parse(savedCoffees) : coffeeArr;
    });

    const [shoppingCart, setShoppingCart] = useState<Coffee[]>(() => {
        const savedCart = localStorage.getItem('CoffeeDeliveryApp-v1-shoppingCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save the shopping cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('CoffeeDeliveryApp-v1-shoppingCart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    // Save the coffee array to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('CoffeeDeliveryApp-v1-coffees', JSON.stringify(coffees));
    }, [coffees]);

    const increaseQuantity = (title: string) => {
        setCoffees((prevCoffees) =>
            prevCoffees.map((coffee) =>
                coffee.title === title
                    ? { ...coffee, quantity: (coffee.quantity || 0) + 1 }
                    : coffee
            )
        );
    };

    const decreaseQuantity = (title: string) => {
        setCoffees((prevCoffees) =>
            prevCoffees.map((coffee) =>
                coffee.title === title
                    ? { ...coffee, quantity: (coffee.quantity || 0) - 1 }
                    : coffee
            )
        );
    };

    const updateCart = (coffee: Coffee) => {
        setShoppingCart((prevCart) => {
            // Create a new array to avoid mutating the previous state directly
            const newCart = [...prevCart];
            const coffeeIndex = newCart.findIndex((c) => c.title === coffee.title);
    
            if (coffeeIndex === -1) {
                // Add new coffee to the cart
                newCart.push(coffee);
            } else {
                // Update existing coffee in the cart
                newCart[coffeeIndex] = coffee;
            }
    
            // Remove items with quantity 0
            return newCart.filter((item) => item.quantity > 0);
        });
    };
    
    
    
    

    return (
        <CartContext.Provider value={{ coffees, shoppingCart, increaseQuantity, decreaseQuantity, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook to use the cart context
export const useCart = () => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
