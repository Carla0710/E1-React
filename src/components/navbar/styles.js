import styled from "styled-components";

export const NavbarContainer = styled.div`
height: 150px;
background-color: #e9edc9;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 3rem;
@media (max-widht: 768px) {
    padding: 1.5rem 2rem;
}
`
export const LinksContainer = styled.div`
color: #f8edeb;
display: flex;
justify-content: center;
align-center: center;
gap: 30px;
a {
    padding: 1rem;
    }
a:first-child{
    background-color: var (--green-bg);
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
`

export const LinkContainer = styled.div`
font-size: 1.2rem;
color: ${(props) => (props.home ? "#fcd5ce" : "#fae1dd")};
` 

export const UserContainer = styled.div`
display: flex;
align-items: center;
`

export const HomeContainer = styled(LinkContainer)`
display: flex;
gap: 1.5rem;
align-items: center;
@media (max-width: 768px){
    display: none;
}
`
export const MenuContainer = styled(LinkContainer)`
display: none;
align-items: center;
font-size: 2rem;
cursor: pointer;
@media (max-width:768px){
    display:flex;
}
`
export const UserNav = styled.div`
gap: 25px;
cursor: pointer;
span{
    color:#006d77;
    font-size: 1.5rem;
    margin-right: 30px;
}
@media (max-width: 768px){
    display: none;
}
`
export const UserImage = styled.div`
width: 30px;
height: 30px;
border-radius: 80px;
cursor: pointer;
`
export const SpanStyled = styled.div`
&:hover{
    text-decoration: underline;
}
`