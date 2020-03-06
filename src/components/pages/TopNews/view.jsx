import React from 'react'
import ArticleList from 'components/shared/ArticleList'

export default class TopNews extends React.Component {
  componentDidMount() {
    this.props.fetchArticles()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.region.id !== nextProps.region.id) {
      this.props.fetchArticles()
    }
  }

  render() {
    const { articles, region } = this.props
    return (
      <div>
        <h2>{`Top news from ${region.name}`}</h2>
        <ArticleList articles={articles} />
      </div>
    )
  }
}
