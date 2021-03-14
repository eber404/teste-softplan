import React from 'react'
import Gallery from '../sections/Gallery'
import Card from '../components/Card'
import { ClipLoader } from 'react-spinners'
import { Flex } from 'reflexbox/styled-components'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../graphql/queries/countryQueries'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES)

  if (loading)
    return (
      <Flex justifyContent="center" alignItems="center">
        <ClipLoader color="rebeccapurple" />
      </Flex>
    )
  if (error) return <p>Error :(</p>

  return (
    <Gallery>
      {data.Country.map((country) => (
        <SLink
          to={{
            pathname: `/countries/${country._id}`,
          }}
          key={country._id}
        >
          <Card
            key={country._id}
            name={country.name}
            capital={country.capital}
            flag={country.flag.svgFile}
            region={country.subregion ? country.subregion.name : null}
            population={country.population}
          />
        </SLink>
      ))}
    </Gallery>
  )
}

const SLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }
`

export default Home
