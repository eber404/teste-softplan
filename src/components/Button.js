import styled from 'styled-components'
import { Button } from 'rebass'

const SButton = styled(Button)`
  border: ${(props) =>
    props.outline ? '1px solid rebeccapurple !important' : 'none'};
  background-color: ${(props) =>
    props.outline ? 'transparent !important' : 'rebeccapurple !important'};
  color: ${(props) => (props.outline ? 'rebeccapurple !important' : '#fff')};
  cursor: pointer;
  width: 100%;
`

export default SButton
