import { ApolloClient, InMemoryCache } from '@apollo/client'
import { CountryMutations } from './mutations/countryMutations'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache,
  resolvers: {
    Mutation: {
      ...CountryMutations,
    },
  },
})

export default client
