import React from 'react'
import { withRouter } from 'react-router'
import FullArticle from 'components/shared/FullArticle'
import BackToList from 'components/shared/BackToList'

const Article = ({ history, location: { state } }) => (
  <React.Fragment>
    <BackToList onClick={history.goBack} />
    <FullArticle {...state.article}></FullArticle>
  </React.Fragment>
)

export default withRouter(Article)
