import React from 'react'
import Masonry from 'react-masonry-component'
import styled from 'styled-components/macro'
import { Box } from 'reflexbox/styled-components'
import { useState } from 'react'

const Gallery = (props) => {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')

  const pageHandler = () => {}

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
