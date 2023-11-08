
import React from 'react'
import { StyledButton } from './styles'

export const Button = ({children, disabled, secondary, radius='30'}) => {
  return (
          <StyledButton
        disabled= {disabled}
        secondary={secondary}
        radius={radius}>
{children}
      </StyledButton>
      )
}


             