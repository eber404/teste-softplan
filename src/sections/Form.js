import PropTypes from 'prop-types'
import { Label, Input } from '@rebass/forms'
import { Flex, Box } from 'reflexbox/styled-components'
import styled from 'styled-components'
import { Heading } from 'rebass'
import SButton from '../components/Button'
import { useState } from 'react'
import NumberFormat from 'react-number-format'
import { useMutation } from '@apollo/client'
import { UPDATE_COUNTRY } from '../graphql/mutations/countryMutations'

const Form = (props) => {
  const id = props.id
  const [name, setName] = useState(props.name)
  const [capital, setCapital] = useState(props.capital)
  const [population, setPopulation] = useState(props.population)
  const [area, setArea] = useState(props.area)

  const [updateCountry] = useMutation(UPDATE_COUNTRY)

  return (
    <SFlex show={props.show}>
      <Box width="100%">
        <SHeading mt="0 !important">Informações básicas</SHeading>
        <Item>
          <SLabel>Nome</SLabel>
          <SInput value={name} onChange={(e) => setName(e.target.value)} />
        </Item>

        <Item>
          <SLabel>Capital</SLabel>
          <SInput
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
        </Item>

        <SHeading>Números</SHeading>
        <Item>
          <SLabel>População</SLabel>
          <SNumberFormat
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            displayType="input"
            thousandSeparator="."
            decimalSeparator=","
          />
        </Item>

        <Item>
          <SLabel>Área</SLabel>
          <SNumberFormat
            value={area}
            onChange={(e) => setArea(e.target.value)}
            displayType="input"
            thousandSeparator="."
            decimalSeparator=","
          />
        </Item>

        <SButton
          type="button"
          onClick={() =>
            updateCountry({
              variables: { id, name, capital, population, area },
            })
          }
        >
          Salvar
        </SButton>
      </Box>
    </SFlex>
  )
}

const SFlex = styled(Flex)`
  margin-top: ${(props) => (props.show ? '15px !important' : 0)};
  margin-bottom: ${(props) => (props.show ? '50px !important' : 0)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  height: ${(props) => (props.show ? '100%' : 0)};
  width: 100%;
  transition: 0.5s ease-in-out;
  z-index: 0;
`

const SHeading = styled(Heading)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto' !important;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  margin-top: 35px !important;
`

const SLabel = styled(Label)`
  font-weight: 700;
  margin-bottom: 2px !important;
`

const SInput = styled(Input)`
  border-radius: 5px;
  width: 100% !important;
  border: 1px solid #a1a1a1 !important;
  padding: 8px !important;
`

const SNumberFormat = styled(NumberFormat)`
  position: relative;
  border-radius: 5px;
  width: 100% !important;
  border: 1px solid #a1a1a1 !important;
  padding: 8px;
  max-width: calc(480px - 18px) !important;
  background-color: transparent !important;
  font-size: 15px;
`

const Item = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

Form.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  area: PropTypes.number.isRequired,
}

export default Form
