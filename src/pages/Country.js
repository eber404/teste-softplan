import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Flex, Box } from 'reflexbox/styled-components'
import { Button, Text } from 'rebass'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY_BY_ID } from '../graphql/queries/countryQueries'
import styled from 'styled-components'
import SVGComponent from '../components/SVGComponent'
import ReactTooltip from 'react-tooltip'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import { up, down } from 'styled-breakpoints'
import { withTheme } from 'styled-components'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

const Country = (props) => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ID, {
    variables: { id },
  })

  const isMobile = useBreakpoint(down('sm'))

  if (loading)
    return (
      <Flex justifyContent="center" alignItems="center">
        <ClipLoader color={props.theme.colors.primary} />
      </Flex>
    )
  if (error) return <p>Error :(</p>

  const country = data.Country[0]

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
            <Text fontFamily="Roboto" fontSize="20px" fontWeight="700">
              {country.name}
            </Text>
            <Text fontFamily="Roboto" fontSize="14px" fontWeight="400">
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
        <Item width="100%" mt="15px">
          <SButton width="100%">Editar</SButton>
        </Item>
        <Item width="100%">
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

  a {
    width: 100% !important;
  }
`

const SButton = styled(Button)`
  border: ${(props) =>
    props.outline ? '1px solid rebeccapurple !important' : 'none'};
  background-color: ${(props) =>
    props.outline ? 'transparent !important' : 'rebeccapurple !important'};
  color: ${(props) => (props.outline ? 'rebeccapurple !important' : '#fff')};
  cursor: pointer;
`

export default withTheme(Country)
