import { createSelector } from 'reselect'

const selectBase = state => state.news

export const selectArticles = createSelector(selectBase, news => {
  return news.articles || []
})

// export const selectArticlesByCategory = createSelector(selectBase, news => {
//   return category => news.articles.category || []
// })

export const selectSearchTerm = createSelector(selectBase, news => {
  return news.searchTerm || ''
})

// export const selectCategories = createSelector(selectArticles, articles =>
//   articles.reduce(
//     (categories, article) =>
//       categories.includes(article.category)
//         ? categories
//         : [...categories, article.category],
//     []
//   )
// )