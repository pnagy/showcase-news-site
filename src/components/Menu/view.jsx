import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import styled from '@emotion/styled'

const Bar = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 32px;
`

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

const Menu = ({ onRegionChange, regions, currentRegion }) => {
  const isArticlePage = useRouteMatch('/article')
  return (
    <Bar>
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
      {!isArticlePage && (
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
      )}
    </Bar>
  )
}

export default Menu
