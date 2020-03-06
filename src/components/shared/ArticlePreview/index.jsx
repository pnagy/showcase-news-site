import React from 'react'
import styled from '@emotion/styled'

const Preview = styled('div')`
  display: flex;
  flex-direction: column;
  width: 180px;
  margin-right: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid transparent;
  padding: 8px;
  cursor: pointer;
  :hover {
    border-color: #efefef;
  }
`

const Image = styled('img')`
  width: 100%;
  margin-bottom: 8px;
`

const Description = styled('div')``

const ArticlePreview = ({ description, urlToImage, title }) => (
  <Preview>
    <Image src={urlToImage} alt={title} />
    <Description>{description}</Description>
  </Preview>
)

export default ArticlePreview
