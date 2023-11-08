import React from 'react'
import { motion } from 'framer-motion';
import { GrHomeRounded, FaRegUserCircle7 } from 'react-icons/fa';
import { HomeContainer, LinkContainer, LinksContainer, NavbarContainer, SpanStyled, UserContainer, UserNav } from './styles';

export const Navbar = () => {
  return (
    <NavbarContainer>
        <div>
      <a href="">
        <img src="../../assets/img/base.png" alt=""/>
        </a> 
       </div>
       <LinksContainer>
       <HomeContainer>
        <motion.div whileTap={{scale:1.3}}></motion.div>
        <UserNav>
        <UserContainer>
        <FaRegUserCircle7/>
         <SpanStyled>Iniciar Sesión</SpanStyled>
         </UserContainer>
        </UserNav>
       <a href='/#'>
       <LinkContainer home={true}>
        Home
        <GrHomeRounded/>
        </LinkContainer>
        </a>
        </HomeContainer>
       </LinksContainer>
       </NavbarContainer>
       );
     };
               
            
            
              
              
        
        
        
          
        
       
       


