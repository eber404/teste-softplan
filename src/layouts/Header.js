import React from 'react'
import { Flex, Box } from 'reflexbox'
import Search from '../components/Search'

const Header = () => {
  return (
    <Flex height="100px" justifyContent="center" alignItems="center">
      <Box>
        <Search />
      </Box>
    </Flex>
  )
}

export default Header
