import { ApolloClient, InMemoryCache } from '@apollo/client'
import initialState from './state'
import { GET_COUNTRIES } from './queries/countryQueries'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache,
})

export default client
