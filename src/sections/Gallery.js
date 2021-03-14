import React from 'react'
import Masonry from 'react-masonry-component'
import styled from 'styled-components/macro'
import { Box } from 'reflexbox/styled-components'

const Gallery = (props) => {
  return (
    <SBox>
      <Masonry
        options={{
          fitWidth: true,
        }}
      >
        {props.children}
      </Masonry>
    </SBox>
  )
}

const SBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default Gallery
