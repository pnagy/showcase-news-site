import React from 'react'
import styled from '@emotion/styled'

const BackLink = styled('div')`
  cursor: pointer;
  padding: 24px 0;
  font-style: italic;
  font-size: 16px;
`

const BackToList = ({ onClick }) => {
  return <BackLink onClick={onClick}> ⇦ Back to list</BackLink>
}
export default BackToList
