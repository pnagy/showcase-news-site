import * as types from './types'

export const initialState = {
  searchTerm: '',
  articles: [],
  isLoading: false,
  error: null
}

const reducers = {}

reducers[types.FETCH_ARTICLES_REQUEST] = reducers[
  types.SEARCH_ARTICLES_REQUEST
] = reducers[types.FETCH_TOP_ARTICLES_BY_CATEGORIES_REQUEST] = reducers[
  types.FETCH_ARTICLES_BY_CATEGORY_REQUEST
] = (state = initialState) => {
  return { ...state, isLoading: true, articles: [] }
}

reducers[types.FETCH_ARTICLES_ERROR] = reducers[
  types.SEARCH_ARTICLES_ERROR
] = reducers[types.FETCH_TOP_ARTICLES_BY_CATEGORIES_ERROR] = reducers[
  types.FETCH_ARTICLES_BY_CATEGORY_ERROR
] = (state = initialState, { payload }) => {
  return { ...state, error: payload, articles: [], isLoading: false }
}

reducers[types.FETCH_ARTICLES_SUCCESS] = reducers[
  types.SEARCH_ARTICLES_SUCCESS
] = (state = initialState, { payload }) => {
  const { articles } = payload
  return { ...state, articles, isLoading: false }
}

reducers[types.CHANGE_SEARCH_TERM] = (state = initialState, { payload }) => {
  return { ...state, searchTerm: payload }
}

export default function reducer(state = {}, action) {
  const handler = reducers[action.type]
  if (handler) return handler(state, action)
  return state
}
