import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache
} from '@apollo/client/core'
// import { SubscriptionClient } from 'subscriptions-transport-ws'

import { WebSocketLink } from 'apollo-link-ws'

// const client = new SubscriptionClient(GRAPHQL_ENDPOINT, { reconnect: true })

const appToken =
  localStorage.getItem(import.meta.env.VITE_KEY_APP_TOKEN) ??
  import.meta.env.VITE_APPTOKEN
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: [appToken ? `Bearer ${appToken}` : '']
    }
  }
})
const appLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: appToken ? `Bearer ${appToken}` : ''
    }
  }
})
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'http://localhost:4000/'
// })

const wsLink = new WebSocketLink({
  uri: 'http://localhost:4000/',
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: {
      Authorization: `Bearer ${appToken}`,
      authToken: appToken
    }
  }
})

// Cache implementation
const cache = new InMemoryCache()
// Create the apollo client
const apolloClient = new ApolloClient({
  link: from([authLink, appLink, wsLink]),
  cache
})

export default apolloClient
