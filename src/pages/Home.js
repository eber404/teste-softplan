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
        <ClipLoader color="#333" />
      </Flex>
    )
  if (error) return <p>Error :(</p>

  return (
    <Gallery>
      {data.Country.map((country, index) => (
        <Link
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
        </Link>
      ))}
    </Gallery>
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

export default Home
