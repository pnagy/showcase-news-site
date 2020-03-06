import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import styled from '@emotion/styled'

import TopNews from 'components/pages/TopNews'
import Search from 'components/pages/Search'

const Container = styled('div')`
  max-width: 784px;
  margin: auto;
`

const Menu = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 32px;
`

const Content = styled('div')``

const Navigation = styled('nav')`
  width: 300px;
  display: flex;
  justify-content: space-between;
`

const NavigationItem = styled(NavLink)`
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 18px;
  :hover {
    text-decoration: underline;
  }
`

const RegionSelector = styled('div')`
  display: flex;
  flex-direction: row;
`

const RegionItem = styled('div')`
  ${props => props.active && 'font-weight: bold;;'}
  text-transform: uppercase;
  padding: 4px;
  cursor: pointer;
`

class App extends React.Component {
  render() {
    const { currentRegion = 'gb', onRegionChange, regions } = this.props
    return (
      <Router>
        <Container>
          <Menu>
            <Navigation>
              <NavigationItem
                exact={true}
                activeStyle={{ fontWeight: 'bold' }}
                to="/"
              >
                Top News
              </NavigationItem>
              <NavigationItem
                exact={true}
                activeStyle={{ fontWeight: 'bold' }}
                to="/categories"
              >
                Categories
              </NavigationItem>
              <NavigationItem
                exact={true}
                activeStyle={{ fontWeight: 'bold' }}
                to="/search"
              >
                Search
              </NavigationItem>
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
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/categories">{/* <Categories /> */}</Route>
              <Route path="/">
                <TopNews />
              </Route>
            </Switch>
          </Content>
        </Container>
      </Router>
    )
  }
}

export default App
