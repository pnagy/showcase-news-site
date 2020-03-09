import paginatedFetch from 'fetch-paginate'
import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_ERROR,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_ERROR,
  FETCH_TOP_ARTICLES_BY_CATEGORIES_REQUEST,
  FETCH_TOP_ARTICLES_BY_CATEGORIES_SUCCESS,
  FETCH_TOP_ARTICLES_BY_CATEGORIES_ERROR,
  FETCH_ARTICLES_BY_CATEGORY_REQUEST,
  FETCH_ARTICLES_BY_CATEGORY_SUCCESS,
  FETCH_ARTICLES_BY_CATEGORY_ERROR,
  CHANGE_SEARCH_TERM
} from './types'
import { selectCurrentRegionId } from 'ducks/region'

import { selectSearchTerm } from './selectors'

const fetchArticlesFromAPI = (params = {}) => {
  const TOKEN = '4afc5036e3f34260a23d46d6d1f15a69'

  const baseUrl = `http://newsapi.org/v2/top-headlines?apiKey=${TOKEN}`

  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')

  const url = `${baseUrl}&${query}`
  return params.pageSize
    ? fetch(url)
        .then(response => response.json())
        .then(data => data.articles)
    : paginatedFetch(url, {
        items: data => data.articles,
        params: { page: 'page' }
      }).then(response => response.data)
}

export const doFetchArticles = () => (dispatch, getState) => {
  const state = getState()
  const country = selectCurrentRegionId(state)

  dispatch({ type: FETCH_ARTICLES_REQUEST, payload: { country } })

  return fetchArticlesFromAPI({ country })
    .then(data =>
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: {
          articles: data.articles || data
        }
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ARTICLES_ERROR,
        payload: err
      })
    })
}

export const doSearchArticles = () => (dispatch, getState) => {
  const state = getState()
  const country = selectCurrentRegionId(state)
  const search = selectSearchTerm(state)

  dispatch({
    type: SEARCH_ARTICLES_REQUEST,
    payload: { country, search }
  })

  return fetchArticlesFromAPI({ country, q: search })
    .then(data =>
      dispatch({
        type: SEARCH_ARTICLES_SUCCESS,
        payload: {
          articles: data.articles || data
        }
      })
    )
    .catch(err => {
      dispatch({
        type: SEARCH_ARTICLES_ERROR,
        payload: err
      })
    })
}
export const doFetchArticlesByCategory = category => (dispatch, getState) => {
  const state = getState()
  const country = selectCurrentRegionId(state)

  dispatch({
    type: FETCH_ARTICLES_BY_CATEGORY_REQUEST,
    payload: { country, category }
  })

  return fetchArticlesFromAPI({ country, category })
    .then(data =>
      dispatch({
        type: FETCH_ARTICLES_BY_CATEGORY_SUCCESS,
        payload: {
          [category]: data.articles || data
        }
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_ARTICLES_BY_CATEGORY_ERROR,
        payload: err
      })
    )
}

export const doFetchTopArticlesByCategories = () => (dispatch, getState) => {
  const state = getState()
  const country = selectCurrentRegionId(state)
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]

  dispatch({
    type: FETCH_TOP_ARTICLES_BY_CATEGORIES_REQUEST,
    payload: { country }
  })

  return Promise.all(
    categories.map(category =>
      fetchArticlesFromAPI({ country, category, pageSize: 5, page: 1 })
    )
  )
    .then(articlesByCategory =>
      articlesByCategory.reduce(
        (result, article, index) => ({
          ...result,
          [categories[index]]: article
        }),
        {}
      )
    )
    .then(data =>
      dispatch({
        type: FETCH_TOP_ARTICLES_BY_CATEGORIES_SUCCESS,
        payload: data.articles || data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_TOP_ARTICLES_BY_CATEGORIES_ERROR,
        payload: err
      })
    )
}

export const doChangeSearchTerm = term => dispatch =>
  dispatch({ type: CHANGE_SEARCH_TERM, payload: term })
