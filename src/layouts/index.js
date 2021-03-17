import React from 'react'
import Header from './Header'
import Main from './Main'
import { Flex, Box } from 'reflexbox'

const Layout = (props) => {
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header />
      <Main>{props.children}</Main>
    </Flex>
  )
}

export default Layout
