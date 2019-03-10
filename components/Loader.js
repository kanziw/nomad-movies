import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { BG_COLOR, TINT_COLOR } from '../constants/Color'

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`

export default () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
)
