import { gql } from '@apollo/client'

export const GET_HOME_COUNTRIES = gql`
  query {
    Country(first: 25) {
      _id
      name
      capital
      flag {
        svgFile
      }
    }
  }
`

export const GET_ALL_COUNTRIES = gql`
  query {
    Country {
      _id
      name
    }
  }
`

export const FIND_COUNTRY_BY_ID = gql`
  query FindCountryById($id: String!) {
    Country(_id: $id) {
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
