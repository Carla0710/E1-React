import { Button } from "../button/button"
import { HeaderContainer, HeaderImageContainer, HeaderTextContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTextContainer>
            <h1>Descubre nuestra nueva colección</h1>
            <h2>Summer Kiss Collection</h2>
            <p>Empezá el verano de la mejor manera!</p>
            <Button>SHOP NOW</Button>
            </HeaderTextContainer>
            <HeaderImageContainer>
            <img src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Header" />
            </HeaderImageContainer>
        </HeaderContainer>
    )
}