import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
  CHANGE_SEARCH_TERM
} from './types'

export const initialState = {
  searchTerm: '',
  articles: [],
  isLoading: false,
  error: null
}

const reducers = {}

reducers[FETCH_ARTICLES_REQUEST] = (state = initialState, { payload }) => {
  return { ...state, isLoading: true, articles: [] }
}

reducers[FETCH_ARTICLES_SUCCESS] = (state = initialState, { payload }) => {
  const { articles, sources } = payload
  const extendedArticles = articles.map(article => {
    const source = sources.find(source => source.id === article.source.id)
    if (!source) return article
    return { ...article, category: source.category }
  })
  return { ...state, articles: extendedArticles, isLoading: false }
}

reducers[FETCH_ARTICLES_ERROR] = (state = initialState, { payload }) => {
  return { ...state, error: payload, articles: [], isLoading: false }
}

reducers[CHANGE_SEARCH_TERM] = (state = initialState, { payload }) => {
  return { ...state, searchTerm: payload }
}

export default function reducer(state = {}, action) {
  const handler = reducers[action.type]
  if (handler) return handler(state, action)
  return state
}
