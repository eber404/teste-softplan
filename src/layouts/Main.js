import { Flex } from 'reflexbox/styled-components'

const Main = (props) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      maxWidth="1280px"
      marginX="auto"
      padding="25px"
    >
      {props.children}
    </Flex>
  )
}

export default Main
