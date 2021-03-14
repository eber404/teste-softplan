import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache,
})

export default client
