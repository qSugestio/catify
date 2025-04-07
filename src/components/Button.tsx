import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px auto;
  display: block;

  &:hover {
    background-color: #0056b3;
  }
`

const Button = ({ fetchCat }: { fetchCat: () => void }) => {
  return <StyledButton onClick={fetchCat}>Load More Cats</StyledButton>
}

export default Button
