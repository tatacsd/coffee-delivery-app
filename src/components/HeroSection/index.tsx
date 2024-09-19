import heroImg from '../../assets/hero-img.png';
import { 
    HeroContent, 
    HeroImageContainer, 
    HeroSectionWrapper,  
    ItemsGrid,
    ItemComponent
} from './styles';

import cartIconImg from '../../assets/hero-icons/cart-icon.png';
import coffeeIconImg from '../../assets/hero-icons/coffee-icon.png';
import deliveryIconImg from '../../assets/hero-icons/delivery-icon.png';
import timeIconImg from '../../assets/hero-icons/time-icon.png';
import backgroundImg from '../../assets/Background.png';

export interface SectionItemProps {
    title: string;
    alt?: string;
    image: string;
}

export const SectionItem = ({ title, image, alt=""}: SectionItemProps) => {
    return (
        <ItemComponent>
            <img src={image} alt={alt} />
            <p>{title}</p>
        </ItemComponent>
    );
}

export function HeroSection() {
    return (
        <HeroSectionWrapper backgroundImg={backgroundImg}>
            {/* Main content container */}
            <HeroContent>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <ItemsGrid>
                    <SectionItem
                        title="Compra simples e segura"
                        image={cartIconImg}
                    />
                    <SectionItem
                        title="Entrega rápida e rastreada"
                        image={timeIconImg}
                    />
                        <SectionItem
                        title="Embalagem mantém o café intacto"
                        image={deliveryIconImg}
                    />
                    <SectionItem
                        title="O café chega fresquinho até você"
                        image={coffeeIconImg}
                    />
                </ItemsGrid>
            </HeroContent>

            {/* Image container */}
            <HeroImageContainer>
                <img src={heroImg} alt="Café" />
            </HeroImageContainer>
        </HeroSectionWrapper>
    );
}
