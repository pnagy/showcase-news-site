import * as types from './types'

export const initialState = {
  searchTerm: '',
  isLoading: false,
  articles: [],
  articlesByCategory: {},
  error: null
}

const reducers = {}

reducers[types.FETCH_ARTICLES_REQUEST] = reducers[
  types.SEARCH_ARTICLES_REQUEST
] = reducers[types.FETCH_TOP_ARTICLES_BY_CATEGORIES_REQUEST] = reducers[
  types.FETCH_ARTICLES_BY_CATEGORY_REQUEST
] = (state = initialState) => {
  return {
    ...initialState,
    searchTerm: state.searchTerm,
    isLoading: true
  }
}

reducers[types.FETCH_ARTICLES_ERROR] = reducers[
  types.FETCH_TOP_ARTICLES_BY_CATEGORIES_ERROR
] = reducers[types.FETCH_ARTICLES_BY_CATEGORY_ERROR] = (
  state = initialState,
  { payload }
) => {
  return {
    ...initialState,
    error: payload
  }
}

reducers[types.SEARCH_ARTICLES_ERROR] = (state = initialState, { payload }) => {
  return {
    ...initialState,
    searchTerm: state.searchTerm,
    error: payload
  }
}

reducers[types.FETCH_ARTICLES_SUCCESS] = reducers[
  types.SEARCH_ARTICLES_SUCCESS
] = (state = initialState, { payload }) => {
  const { articles } = payload
  return { ...state, articles, isLoading: false, error: null }
}

reducers[types.CHANGE_SEARCH_TERM] = (state = initialState, { payload }) => {
  return { ...state, searchTerm: payload }
}

reducers[types.FETCH_TOP_ARTICLES_BY_CATEGORIES_SUCCESS] = reducers[
  types.FETCH_ARTICLES_BY_CATEGORY_SUCCESS
] = (state = initialState, { payload }) => {
  return {
    ...state,
    articlesByCategory: payload,
    isLoading: false,
    error: null
  }
}

export default function reducer(state = {}, action) {
  const handler = reducers[action.type]
  if (handler) return handler(state, action)
  return state
}
