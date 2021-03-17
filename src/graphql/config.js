import { ApolloClient, InMemoryCache } from '@apollo/client'
import { CountryResolvers } from './resolvers/countryResolvers'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache,
  resolvers: {
    Mutation: {
      ...CountryResolvers,
    },
  },
})

export default client
