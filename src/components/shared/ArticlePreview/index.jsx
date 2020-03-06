import React from 'react'
import styled from '@emotion/styled'

const Preview = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  margin-right: 16px;
  margin-bottom: 16px;
`

const Image = styled('img')`
  max-width: 160px;
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
