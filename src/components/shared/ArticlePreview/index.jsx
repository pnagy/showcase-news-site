import React from 'react'
import styled from '@emotion/styled'

const Preview = styled('div')`
  color: black;
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-right: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 2px solid transparent;
  padding: 8px;
  cursor: pointer;
  :hover {
    border-color: #dfdfdf;
  }
`

const Title = styled('div')`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 8px;
`

const Image = styled('img')`
  width: 100%;
  margin-bottom: 8px;
`

const Description = styled('div')``

const ArticlePreview = ({ description, urlToImage, title }) => (
  <Preview>
    <Title>{title}</Title>
    <Image src={urlToImage} alt={title} />
    <Description>{description}</Description>
  </Preview>
)

export default ArticlePreview
