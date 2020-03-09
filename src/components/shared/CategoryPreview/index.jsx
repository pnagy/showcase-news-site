import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import ArticlePreview from 'components/shared/ArticlePreview'

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 12px;
`

const CategoryBar = styled('div')`
  display: flex;
  font-size: 20px;
  border-bottom: 1px solid black;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
`

const Title = styled(Link)`
  display: flex;
  margin-right: 12px;
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`
const Indicator = styled('span')`
  display: flex;
  ${props => props.open && 'transform: rotate(90deg);'}
  transition: transform 0.1s ease-in-out;
`
const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 420px;
  overflow: hidden;
`

const MoveControl = styled('span')`
  ${props => (props.left ? 'border-right' : 'border-left')}: 1px solid black;
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 32px;
  padding: 6px;
`

export default class CategoryPreview extends React.Component {
  state = { open: true, positions: [0, 1, 2] }

  toggleCategory = () => {
    this.setState({ open: !this.state.open })
  }

  moveLeft = () => () => {
    const { articles } = this.props
    const { positions } = this.state
    this.setState({
      positions: positions.map(
        pos => (pos + articles.length - 1) % articles.length
      )
    })
  }

  moveRight = () => () => {
    const { articles } = this.props
    const { positions } = this.state
    this.setState({
      positions: positions.map(pos => (pos + 1) % articles.length)
    })
  }

  getVisibleArticles = () => {
    const { articles } = this.props
    const { positions } = this.state
    return positions.map(index => articles[index])
  }

  render() {
    const { category } = this.props
    const { open } = this.state
    return (
      <Container>
        <CategoryBar onClick={this.toggleCategory}>
          <Title to={{ pathname: '/category', state: { category } }}>
            {category}
          </Title>
          <Indicator open={open}>ᐅ</Indicator>
        </CategoryBar>
        {open && (
          <Content>
            <MoveControl left={true} onClick={this.moveLeft()}>
              «
            </MoveControl>
            {this.getVisibleArticles().map(article => (
              <ArticlePreview article={article} key={article.title} />
            ))}
            <MoveControl left={false} onClick={this.moveRight()}>
              »
            </MoveControl>
          </Content>
        )}
      </Container>
    )
  }
}
