import React from 'react'
import styled from '@emotion/styled'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`

const Title = styled('div')`
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 24px;
`

const Image = styled('img')`
  width: 100%;
  margin-bottom: 24px;
`

const Content = styled('div')`
  font-size: 22px;
`

const FullArticle = ({ title, content, urlToImage }) => (
  <Container>
    <Title>{title}</Title>
    <Image src={urlToImage} alt={title} />
    <Content>{content}</Content>
  </Container>
)

export default FullArticle
