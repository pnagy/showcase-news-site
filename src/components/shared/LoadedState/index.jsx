import React from 'react'

import Loading from 'components/shared/Loading'
import Error from 'components/shared/Error'

const LoadedState = ({ isLoading, isErrored, children }) => {
  if (isLoading) return <Loading />
  if (isErrored) return <Error />
  return children || null
}

export default LoadedState
