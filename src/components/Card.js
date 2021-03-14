import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Heading, Text } from 'rebass/styled-components'
import { Box } from 'reflexbox/styled-components'

const Card = ({ name, capital, flag }) => {
  return (
    <SBox>
      <Box>
        <ImageBox>
          <img src={flag} alt={name} />
        </ImageBox>
      </Box>

      <Box display="flex" flexDirection="column" ml="15px">
        <Box width="100%">
          <Heading fontFamily="Roboto" fontWeight="400" fontSize="18px">
            {name}
          </Heading>
          <Text fontFamily="Roboto" fontSize="14px" fontWeight="700">
            {capital}
          </Text>
        </Box>
      </Box>
    </SBox>
  )
}

const SBox = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  padding: 15px;
  margin: 10px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 50px #0000000d;
  cursor: pointer;
`

const ImageBox = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 50px #00000012;

  & img {
    width: 100%;
    object-fit: cover;
  }
`

Card.prototype = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string,
  region: PropTypes.string,
}

Card.defaultProps = {
  flag: `n/a`,
}

export default Card
