import { gql } from '@apollo/client'

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
