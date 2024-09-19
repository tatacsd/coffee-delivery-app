import coffeeArabeImg from '../assets/coffee-images/coffee-arabe.png';
import coffeWithMilkImg from '../assets/coffee-images/coffee-cafe-com-leite.png';
import coffeeCapuccinoImg from '../assets/coffee-images/coffee-capuccino.png';
import coffeeHotChocolateImg from '../assets/coffee-images/coffee-chocolate-quente.png';
import coffeeCubanImg from '../assets/coffee-images/coffee-cubano.png';
import coffeeTraditionalExpressoImg from '../assets/coffee-images/coffee-espresso-tradicional.png';
import coffeeAmericanExpressoImg from '../assets/coffee-images/coffee-expresso-americano.png';
import coffeeCreamyExpressoImg from '../assets/coffee-images/coffee-expresso-cremoso.png';
import coffeeIcedExpressoImg from '../assets/coffee-images/coffee-expresso-gelado.png';
import coffeeLatteImg from '../assets/coffee-images/coffee-latte.png';
import coffeeMacchiatoImg from '../assets/coffee-images/coffee-macchiato.png';
import coffeeMochaccinoImg from '../assets/coffee-images/coffee-mochaccino.png';
import coffeeHawaiianImg from '../assets/coffee-images/coffee-havaiano.png';
import coffeeIrishImg from '../assets/coffee-images/coffee-irlandes.png';



import { Coffee } from '../components/CoffeeCard';


export const coffeeArr: Coffee[] = [
    {
        image: coffeeTraditionalExpressoImg,
        tag: ['TRADITIONAL'],
        title: 'Traditional Espresso',
        description: 'The traditional coffee made with hot water and ground beans',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeAmericanExpressoImg,
        tag: ['TRADITIONAL'],
        title: 'American Espresso',
        description: 'Diluted espresso, less intense than the traditional',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeCreamyExpressoImg,
        tag: ['TRADITIONAL'],
        title: 'Creamy Espresso',
        description: 'Traditional espresso coffee with creamy foam',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeIcedExpressoImg,
        tag: ['TRADITIONAL', 'ICE'],
        title: 'Iced Espresso',
        description: 'A drink prepared with espresso and ice cubes',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeWithMilkImg,
        tag: ['TRADITIONAL', 'WITH MILK'],
        title: 'Coffee with Milk',
        description: 'Half traditional espresso and half steamed milk',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeLatteImg,
        tag: ['TRADITIONAL', 'WITH MILK'],
        title: 'Latte',
        description: 'A shot of espresso with double the amount of milk and creamy foam',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeCapuccinoImg,
        tag: ['TRADITIONAL', 'WITH MILK'],
        title: 'Cappuccino',
        description: 'A drink with cinnamon made with equal parts of coffee, milk, and foam',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeMacchiatoImg,
        tag: ['TRADITIONAL', 'WITH MILK'],
        title: 'Macchiato',
        description: 'Espresso coffee mixed with a little hot milk and foam',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeMochaccinoImg,
        tag: ['TRADITIONAL', 'WITH MILK'],
        title: 'Mochaccino',
        description: 'Espresso coffee with chocolate syrup, a little milk, and foam',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeHotChocolateImg,
        tag: ['SPECIAL', 'WITH MILK'],
        title: 'Hot Chocolate',
        description: 'A drink made with chocolate dissolved in hot milk and coffee',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeCubanImg,
        tag: ['SPECIAL', 'ALCOHOLIC', 'ICE'],
        title: 'Cuban',
        description: 'Cold espresso drink with rum, cream, and mint',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeHawaiianImg,
        tag: ['SPECIAL'],
        title: 'Hawaiian',
        description: 'A sweetened drink prepared with coffee and coconut milk',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeArabeImg,
        tag: ['SPECIAL'],
        title: 'Arabian',
        description: 'A drink prepared with Arab coffee beans and spices',
        price: 9.99,
        quantity: 0
    },
    {
        image: coffeeIrishImg,
        tag: ['SPECIAL', 'ALCOHOLIC'],
        title: 'Irish',
        description: 'A drink based on coffee, Irish whiskey, sugar, and whipped cream',
        price: 9.99,
        quantity: 0
    },
]