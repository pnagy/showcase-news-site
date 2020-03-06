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

class App extends React.Component {
  render() {
    const { currentRegion = 'gb', onRegionChange, regions } = this.props
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
              {regions.map(region => (
                <RegionItem
                  onClick={onRegionChange(region.id)}
                  active={currentRegion === region.id}
                  key={region.id}
                >
                  {region.id}
                </RegionItem>
              ))}
            </RegionSelector>
          </Menu>
          <Content>
            <Switch>
              <Route path="/search">{/* <Search /> */}</Route>
              <Route path="/categories">{/* <Categories /> */}</Route>
              <Route path="/">{/* <TopNews /> */}</Route>
            </Switch>
          </Content>
        </Container>
      </Router>
    )
  }
}

export default App
