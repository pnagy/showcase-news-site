import { createSelector } from 'reselect'

const selectBase = state => state.news

export const selectArticles = createSelector(selectBase, news => {
  return news.articles || []
})

export const selectSearchTerm = createSelector(
  selectBase,
  news => news.searchTerm || ''
)

export const selectIsLoading = createSelector(
  selectBase,
  news => news.isLoading
)

export const selectIsErrored = createSelector(selectBase, news => !!news.error)

export const selectArticlesByCategories = createSelector(
  selectBase,
  news => news.articlesByCategory || {}
)
