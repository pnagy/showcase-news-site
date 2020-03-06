import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled('div')``

const Menu = styled('div')``

const Content = styled('div')``

const Navigation = styled('nav')``

const NavigationItem = styled(Link)``

const RegionSelector = styled('div')``

const RegionItem = styled('div')``

const App = ({
  currentRegion = 'gb',
  onChangeRegion = region => () => {
    console.log('Region changed to ', region)
  }
}) => {
  return (
    <Router>
      <Container>
        <Menu>
          <Navigation>
            <NavigationItem to="/">Top News</NavigationItem>
            <NavigationItem to="/categories">Categories</NavigationItem>
            <NavigationItem to="/search">Search</NavigationItem>
          </Navigation>
          <RegionSelector>
            <RegionItem
              onClick={onChangeRegion('gb')}
              active={currentRegion === 'gb'}
            >
              gb
            </RegionItem>
            <RegionItem
              onClick={onChangeRegion('us')}
              active={currentRegion === 'us'}
            >
              us
            </RegionItem>
          </RegionSelector>
        </Menu>
        <Content>
          <Switch>
            <Route path="/category/:id">{/* <Category /> */}</Route>
            <Route path="/article/:id">{/* <Article /> */}</Route>
            <Route path="/search">{/* <Search /> */}</Route>
            <Route path="/categories">{/* <Categories /> */}</Route>
            <Route path="/">{/* <TopNews /> */}</Route>
          </Switch>
        </Content>
      </Container>
    </Router>
  )
}

export default App
