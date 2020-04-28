import styled from 'styled-components'

export const Container = styled.div`
  color: #66a;
  margin: 30px 0;
`

const Button = styled.button<{ active: boolean }>`
  color: ${(props) => (props.active ? 'white' : '#ccc')};
  cursor: ${(props) => (props.active ? 'auto' : 'pointer')};
  border: 0;
  background-color: ${(props) => (props.active ? '#66a' : '#555')};
  font-family: futura;
  font-size: 14px;
  line-height: 1;
  padding: 10px 10px;
  margin: 0 2px 8px;
  outline: 0;
  width: 80px;
`

export default Button
