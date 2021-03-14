import { gql } from '@apollo/client'
// import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
  query {
    Country(first: 10) {
      _id
      name
      capital
      flag {
        svgFile
      }
    }
  }
`

export const GET_COUNTRY_BY_ID = gql`
  query GetCountries($id: String!) {
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
      subregion {
        name
      }
    }
  }
`
