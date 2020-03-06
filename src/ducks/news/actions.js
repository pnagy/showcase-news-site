import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_ERROR
} from './types'
import { selectCurrentRegionId } from 'ducks/region'

const TOKEN = '057283ea582e4bb8b181e661925773db'

export const doFetchArticles = () => (dispatch, getState) => {
  const state = getState()
  const region = selectCurrentRegionId(state)
  const sourcesRequest = fetch(
    `http://newsapi.org/v2/top-headlines?country=${region}&apiKey=${TOKEN}`
  )
  const headlinesRequest = fetch(
    `http://newsapi.org/v2/sources?country=${region}&apiKey=${TOKEN}`
  )
  dispatch({ type: FETCH_ARTICLES_REQUEST })

  return Promise.all([
    headlinesRequest.then(resp => resp.json()),
    sourcesRequest.then(resp => resp.json())
  ])
    .then(data => {
      const [sourcesResponse, headlinesResponse] = data
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: {
          articles: headlinesResponse.articles,
          sources: sourcesResponse.sources
        }
      })
    })
    .catch(err => dispatch({ type: FETCH_ARTICLES_ERROR, payload: err }))
}
