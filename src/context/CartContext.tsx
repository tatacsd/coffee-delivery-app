import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { Coffee } from "../components/CoffeeCard";
import { coffeeArr } from "../mockData/coffee";

// actions
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const UPDATE_CART = "UPDATE_CART";
const REMOVE_COFFEE_ITEM = "REMOVE_COFFEE_ITEM";
const CLEAR_CART = "CLEAR_CART";

// initial state
interface CartState {
  coffees: Coffee[];
  shoppingCart: Coffee[];
}

interface CartContextType {
  coffees: Coffee[];
  shoppingCart: Coffee[];
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  updateCart: (coffee: Coffee) => void;
  removeCoffeeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        coffees: state.coffees.map((coffee) =>
          coffee.id === action.payload.id
            ? { ...coffee, quantity: (coffee.quantity || 0) + 1 }
            : coffee
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        coffees: state.coffees.map((coffee) =>
          coffee.id === action.payload.id
            ? { ...coffee, quantity: Math.max((coffee.quantity || 0) - 1, 0) }
            : coffee
        ),
      };

    case UPDATE_CART: {
      const coffeeToUpdate = action.payload;
      const existingCartIndex = state.shoppingCart.findIndex(
        (coffee) => coffee.id === coffeeToUpdate.id
      );

      if (existingCartIndex !== -1) {
        const updatedShoppingCart = [...state.shoppingCart];
        updatedShoppingCart[existingCartIndex] = {
          ...updatedShoppingCart[existingCartIndex],
          quantity: coffeeToUpdate.quantity,
        };

        return {
          ...state,
          shoppingCart: updatedShoppingCart,
        };
      }

      if (coffeeToUpdate.quantity > 0) {
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, coffeeToUpdate],
        };
      }
      return state;
    }

    case REMOVE_COFFEE_ITEM:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (coffee) => coffee.id !== action.payload
        ),
        coffees: state.coffees.map((coffee) =>
          coffee.id === action.payload ? { ...coffee, quantity: 0 } : coffee
        ),
      };

    case CLEAR_CART:
      return {
        coffees: coffeeArr,
        shoppingCart: [],
      };

    default:
      return state;
  }
};

// initial state
// initial state
const initialState: CartState = {
  coffees:
    (() => {
      const storedCoffees = JSON.parse(
        localStorage.getItem("CoffeeDeliveryApp-v1-coffees") || "[]"
      );
      return Array.isArray(storedCoffees) && storedCoffees.length > 0
        ? storedCoffees
        : coffeeArr;
    })(),
  shoppingCart:
    JSON.parse(
      localStorage.getItem("CoffeeDeliveryApp-v1-shoppingCart") || "[]"
    ) || [],
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "CoffeeDeliveryApp-v1-shoppingCart",
      JSON.stringify(cartState.shoppingCart)
    );
  }, [cartState.shoppingCart]);

  useEffect(() => {
    localStorage.setItem(
      "CoffeeDeliveryApp-v1-coffees",
      JSON.stringify(cartState.coffees)
    );
  }, [cartState.coffees]);

  const increaseQuantity = (id: string) => {
    dispatch({ type: INCREASE_QUANTITY, payload: { id } });
    const coffee = cartState.coffees.find((coffee) => coffee.id === id);
    if (coffee) {
      updateCart({ ...coffee, quantity: (coffee.quantity || 0) + 1 });
    }
  };

  const decreaseQuantity = (id: string) => {
    dispatch({ type: DECREASE_QUANTITY, payload: { id } });
    const coffee = cartState.coffees.find((coffee) => coffee.id === id);
    if (coffee) {
      updateCart({
        ...coffee,
        quantity: Math.max((coffee.quantity || 0) - 1, 0),
      });
    }
  };

  const updateCart = (coffee: Coffee) => {
    dispatch({ type: UPDATE_CART, payload: coffee });
  };

  const removeCoffeeItem = (id: string) => {
    dispatch({ type: REMOVE_COFFEE_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        coffees: cartState.coffees,
        shoppingCart: cartState.shoppingCart,
        increaseQuantity,
        decreaseQuantity,
        updateCart,
        removeCoffeeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
