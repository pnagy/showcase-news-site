import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'

import Menu from 'components/Menu'
import TopNews from 'components/pages/TopNews'
import Categories from 'components/pages/Categories'
import Search from 'components/pages/Search'
import Article from 'components/pages/Article'

const Container = styled('div')`
  max-width: 784px;
  margin: auto;
`

const Content = styled('div')``

const App = () => {
  return (
    <Router>
      <Container>
        <Menu />
        <Content>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/article">
              <Article />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <TopNews />
            </Route>
          </Switch>
        </Content>
      </Container>
    </Router>
  )
}

export default App
