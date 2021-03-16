import { gql } from '@apollo/client'
import { GET_COUNTRIES } from '../queries/countryQueries'

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
    const data = cache.readQuery({ query: GET_COUNTRIES })
    const id = variables.id

    console.log('variables', variables)
    console.log('data', data)

    const updatedCountries = data.Country.map((c) => {
      if (c._id === id) {
        const updatedCountry = {
          ...c,
          ...variables,
        }

        return updatedCountry
      }

      return c
    })

    cache.writeQuery({
      query: GET_COUNTRIES,
      data: { Country: updatedCountries },
    })

    return null
  },
}
