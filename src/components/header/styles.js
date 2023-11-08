import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
Justify-content: space-around;
align-items: center;
max-width: 1300px;
margin: 0 auto;
gap: 20px;
h1{
    margin-bottom: 1rem;
}
@media (max-width: 1000px) {
    flex-direction: column;
}
`
export const HeaderTextContainer = styled.div`
display: flex;
flex-direction: column;
Justify-content: center;
align-items: flex-start;
width: 50%;
h1{
    margin: 20px 0;
    font-size: 3rem;
}
h2{
    margin: 15px 0;
    font-size: 2rem;
}
p{
    font-size: 1.5rem;
}
@media (max-width: 1000px) {
    width: 80%;
    align-item: center;
    text-align: center;
}
`
export const HeaderImageContainer = styled.div`
width: 40%;
img{
    width: 100%;
    padding-bottom: 50px;
}
@media (max-width:1000px){
    display: none;
}
`