import paginatedFetch from 'fetch-paginate'
import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_ERROR,
  CHANGE_SEARCH_TERM
} from './types'
import { selectCurrentRegionId } from 'ducks/region'

import { selectSearchTerm } from './selectors'

const TOKEN = '057283ea582e4bb8b181e661925773db'

export const doFetchArticles = () => (dispatch, getState) => {
  const state = getState()

  const region = selectCurrentRegionId(state)
  const term = selectSearchTerm(state)

  const sourcesRequest = fetch(
    `http://newsapi.org/v2/sources?country=${region}&apiKey=${TOKEN}`
  )
  const headlinesRequest = paginatedFetch(
    `http://newsapi.org/v2/top-headlines?country=${region}&apiKey=${TOKEN}&q=${term}`,
    {
      items: data => data.articles,
      params: { page: 'page' }
    }
  )

  dispatch({ type: FETCH_ARTICLES_REQUEST })

  return Promise.all([
    sourcesRequest.then(resp => resp.json()),
    headlinesRequest
  ])
    .then(data => {
      const [sourcesResponse, headlinesResponse] = data
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: {
          articles: headlinesResponse.data,
          sources: sourcesResponse.sources
        }
      })
    })
    .catch(err => dispatch({ type: FETCH_ARTICLES_ERROR, payload: err }))
}

export const doChangeSearchTerm = term => dispatch =>
  dispatch({ type: CHANGE_SEARCH_TERM, payload: term })
