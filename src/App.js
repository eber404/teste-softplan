import Main from './layouts/Main'
import Home from './pages/Home'
import Country from './pages/Country'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/config'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Main>
            <Route path="/countries/:id">
              <Country />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Main>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
