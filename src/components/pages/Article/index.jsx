import React from 'react'
import { withRouter } from 'react-router'
import FullArticle from 'components/shared/FullArticle'
import BackToList from 'components/shared/BackToList'

const Article = ({ history, location: { state: article } }) => (
  <React.Fragment>
    <BackToList onClick={history.goBack} />
    {!article && <h1>No article selected... :(((((</h1>}
    {article && <FullArticle {...article}></FullArticle>}
  </React.Fragment>
)

export default withRouter(Article)
