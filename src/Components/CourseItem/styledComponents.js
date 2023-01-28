import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Item = styled.li`
  width: 200px;
  display: flex;
  align-items: center;
  margin: 10px 10px 20px 0px;
`
export const Name = styled.p`
  color: #1e293b;
`

export const Image = styled.img`
  height: 80px;
  margin-right: 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
