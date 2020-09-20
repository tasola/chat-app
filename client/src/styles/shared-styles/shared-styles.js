import styled from 'styled-components'
import { primaryColor } from '../palette'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 35vw;
  min-width: 400px;
  margin: 0 auto;
  padding: 1.5em 1em;
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`

export const Header = styled.h3`
  text-align: center;
  margin: 0;
`

export const Input = styled.input`
  width: 100%;
  height: 2.5em;
  margin: 0.5em 0;
  border: none;
  border-bottom: 2px solid ${primaryColor};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  &:focus {
    outline-width: 0;
  }
`
