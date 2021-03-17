import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Flex, Box } from 'reflexbox/styled-components'
import { Text } from 'rebass'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../graphql/queries/countryQueries'
import styled from 'styled-components'
import SVGComponent from '../components/SVGComponent'
import ReactTooltip from 'react-tooltip'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { withTheme } from 'styled-components'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import Form from '../sections/Form'
import SButton from '../components/Button'

const Country = (props) => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_COUNTRIES)

  const [showForm, setShowForm] = useState(false)

  const isMobile = useBreakpoint(down('sm'))

  if (loading)
    return (
      <Flex justifyContent="center" alignItems="center">
        <ClipLoader color={props.theme.colors.primary} />
      </Flex>
    )
  if (error) return <p>Error :(</p>

  const country = data.Country.find((c) => c._id === id)

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <SBox
        display="flex"
        alignItems="center"
        backgroundColor="#fff"
        maxWidth="480px"
        width="100%"
      >
        <ImageBox>
          <img src={country.flag.svgFile} alt={country.name} />
        </ImageBox>
        <Box ml="25px" padding="15px 30px 15px 0">
          <Item
            display="flex"
            alignItems={
              isMobile ? 'center !important' : 'flex-start !important'
            }
            justifyContent="flex-start !important"
            flexDirection="column"
          >
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="700"
              sx={{ wordWrap: 'break-word', wordBreak: 'break-word' }}
            >
              {country.name}
            </Text>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              sx={{ wordWrap: 'break-word', wordBreak: 'break-word' }}
            >
              {country.capital}
            </Text>
          </Item>

          <Item data-tip data-for="population">
            <ReactTooltip id="population" type="info">
              Population
            </ReactTooltip>
            <SVGComponent src="/assets/icons/user.svg" width="22px" mr="10px" />
            <Text fontFamily="Roboto" fontSize="14px" fontWeight="400">
              <NumberFormat
                value={country.population}
                displayType={'text'}
                thousandSeparator="."
                decimalSeparator=","
              />
            </Text>
          </Item>

          <Item data-tip data-for="area">
            <ReactTooltip id="area" type="info">
              Area
            </ReactTooltip>
            <SVGComponent src="/assets/icons/map.svg" width="22px" mr="10px" />
            <Text fontFamily="Roboto" fontSize="14px" fontWeight="400">
              <NumberFormat
                value={country.area}
                displayType={'text'}
                thousandSeparator="."
                decimalSeparator=","
              />
            </Text>
          </Item>

          {country.topLevelDomains.map((top, index) => (
            <Item data-tip data-for="domains" key={index}>
              <ReactTooltip id="domains" type="info">
                Top level domains
              </ReactTooltip>
              <SVGComponent
                src="/assets/icons/globe.svg"
                width="22px"
                mr="10px"
              />
              <Text fontFamily="Roboto" fontSize="14px" fontWeight="400">
                {top.name}
              </Text>
            </Item>
          ))}
        </Box>
      </SBox>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        maxWidth="480px"
      >
        <Item width="100%" mt="15px" flexDirection="column">
          <SButton width="100%" onClick={() => setShowForm(!showForm)}>
            Editar
          </SButton>
          <Form
            show={showForm}
            id={country._id}
            name={country.name}
            capital={country.capital}
            population={country.population}
            area={country.area}
            domain={country.topLevelDomains[0].name}
          />
        </Item>
        <Item width="100%" zIndex={1}>
          <Link to="/">
            <SButton width="100%" outline>
              Voltar
            </SButton>
          </Link>
        </Item>
      </Box>
    </Flex>
  )
}

const SBox = styled(Box)`
  flex-direction: row;
  border-radius: 15px;

  ${down('sm')} {
    flex-direction: column;
  }
`

const ImageBox = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 50px #00000012;

  img {
    width: 100%;
    object-fit: cover;
  }

  ${down('sm')} {
    margin-top: 30px;
  }
`

const Item = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  z-index: ${(props) => props.zIndex};

  a {
    width: 100% !important;
  }
`

export default withTheme(Country)
