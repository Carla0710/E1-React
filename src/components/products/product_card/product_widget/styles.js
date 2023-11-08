import styled from "styled-components";

export const ProductosWrapper = styled.div`
display: flex;
padding-top: 30px;
flex-direction: column;
align-items: center;
max-width: 1300px;
width: 100;
margin: 15px auto;
@media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
}
`

export const ProductosContainer = styled.div`
display: grid;
place-items: center;
grid-template-colums: repeat(auto-fit,400px);
row-gap: 3.5rem;
width: 100%;
max-width: 1300px;
padding: 1 rem 0;
justify-content: center;
align-items: center;
gap: 20 px;
`