import React from 'react'
import { ClipLoader } from 'react-spinners'
import { Flex, Box } from 'reflexbox/styled-components'
import { Text } from 'rebass'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY_BY_ID } from '../graphql/queries/countryQueries'
import styled from 'styled-components'
import SVGComponent from '../components/SVGComponent'
import ReactTooltip from 'react-tooltip'
import NumberFormat from 'react-number-format'

const Country = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ID, {
    variables: { id },
  })

  if (loading)
    return (
      <Flex justifyContent="center" alignItems="center">
        <ClipLoader color="#333" />
      </Flex>
    )
  if (error) return <p>Error :(</p>

  const country = data.Country[0]

  console.log('country', country)

  return (
    <Flex justifyContent="center" alignItems="center">
      <ImageBox>
        <img src={country.flag.svgFile} alt={country.name} />
      </ImageBox>
      <Box ml="25px">
        <Item
          display="flex"
          justifyContent="flex-start !important"
          alignItems="flex-start !important"
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
          <Item data-tip data-for="domains" key={index} mb="0 !important">
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
    </Flex>
  )
}

const ImageBox = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 50px #00000012;

  & img {
    width: 100%;
    object-fit: cover;
  }
`

const Item = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export default Country
