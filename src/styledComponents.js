import styled from 'styled-components'

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  width: 120px;
  height: 35px;
  border: ${props => (props.outline ? '2px solid #0070c1' : 'none')};
  background: ${props =>
    props.outline ? 'none' : 'linear-gradient(to right,skyblue,dodgerblue)'};
  border-radius: 8px;
  cursor: pointer;
  color: ${props => (props.outline ? '#0070c1' : 'white')};
  font-weight: bold;
  margin-left: 10px;
`
