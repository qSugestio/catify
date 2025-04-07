import styled from 'styled-components'

const Card = styled.div`
  width: 200px;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const CatImage = styled.img`
  width: 100%;
  height: auto;
`

const CatCard = ({ url }: { url: string }) => {
  return (
    <Card>
      <CatImage src={url} alt='Cat' />
    </Card>
  )
}

export default CatCard
