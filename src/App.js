import Layout from './layouts/'
import Home from './pages/Home'
import Country from './pages/Country'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/config'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Layout>
              <Route path="/countries/:id">
                <Country />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
