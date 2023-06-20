import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => (props.isActiveBtn ? '#db1c48' : '#ffffff')};
  color: ${props => (props.isActiveBtn ? '#ffffff' : '#db1c48')};
  border: 1px solid #db1c48;
  padding: 6px 15px;
  border-radius: 14px;
  margin: 5px 5px;
`

export const Li = styled.li``
