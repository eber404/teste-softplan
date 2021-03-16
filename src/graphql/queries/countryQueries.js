import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query {
    Country(first: 10) {
      _id
      name
      capital
      area
      population
      topLevelDomains {
        name
      }
      flag {
        svgFile
      }
    }
  }
`
