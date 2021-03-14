import Svg from 'react-inlinesvg'
import React from 'react'
import styled from 'styled-components'
import { Box } from 'reflexbox/styled-components'
import { color, layout, size, space, margin, position } from 'styled-system'

const SVGComponent = (props) => {
  return (
    <StyledBox margin={props.margin}>
      <StyledBox>
        <StyledSvg {...props} />
      </StyledBox>
      <StyledBox>
        {/* <NotificationDot
          visibility={props.hasnotification ? 'visible' : 'hidden'}
        /> */}
      </StyledBox>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${margin};
`

const StyledSvg = styled(Svg)`
  position: relative;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & path {
    fill: ${({ color }) => color};
  }

  & .a {
    opacity: 1;
    fill: ${({ color }) => color};
  }

  circle {
    fill: ${({ color }) => color};
  }

  ${color};
  ${layout};
  ${size};
  ${space};
  ${margin};
  ${position};
`

/* const NotificationDot = styled(Box)`
  position: absolute;
  border-radius: 100%;
  width: 6px;
  height: 6px;
  left: -5px;
  top: -10px;
  background-color: ${(props) => props.theme.colors.primary};
  visibility: ${(props) => props.visibility};
  ${layout};
` */

export default SVGComponent
