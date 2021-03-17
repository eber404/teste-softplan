import { gql } from '@apollo/client'
import { FIND_COUNTRY_BY_ID } from '../queries/countryQueries'

export const UPDATE_COUNTRY = gql`
  mutation UpdateCountry(
    $id: Number!
    $name: String
    $capital: String
    $area: Number
    $population: Number
  ) {
    updateCountry(
      id: $id
      name: $name
      capital: $capital
      area: $area
      population: $population
    ) @client
  }
`

export const CountryMutations = {
  updateCountry: (_, variables, { cache }) => {
    const id = variables.id

    const data = cache.readQuery({
      query: FIND_COUNTRY_BY_ID,
      variables: { id },
    })

    const updatedCountry = { ...data.Country[0], ...variables }

    cache.writeQuery({
      query: FIND_COUNTRY_BY_ID,
      variables: { id },
      data: { Country: [updatedCountry] },
    })

    return null
  },
}
