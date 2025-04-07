import styled from 'styled-components'

const HeaderStyled = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 24px;
  font-weight: bold;
`

const Header = () => {
  return <HeaderStyled>Cat Gallery</HeaderStyled>
}

export default Header
