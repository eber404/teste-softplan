import React from 'react'
import { ClipLoader } from 'react-spinners'
import { Flex, Box } from 'reflexbox/styled-components'
import { Text } from 'rebass'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY_BY_ID } from '../graphql/queries/countryQueries'
import styled from 'styled-components'

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

  return (
    <Flex justifyContent="center" alignItems="center">
      <ImageBox>
        <img src={country.flag.svgFile} alt={country.name} />
      </ImageBox>
      <Box>
        <Text fontFamily="Roboto" fontSize="14px" fontWeight="400">
          {country.name}
        </Text>
      </Box>
    </Flex>
  )
}

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

export default Country
