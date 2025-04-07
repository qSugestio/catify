import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import CatCard from './components/CatCard'
import Header from './components/Header'

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function App() {
  const [cat, setCat] = useState('')

  const fetchCat = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search',
        {
          headers: {
            'x-api-key':
              'live_Iw6z1vBvXHqb0TSE2zGjqZSpGInIhcCynKX7y5WdU4pcHXUYd4PVbwugr8FrmCN9',
          },
        }
      )
      const data = await response.json()

      setCat(data[0].url)
    } catch (error) {
      console.error('Ошибка при загрузке котиков: ', error)
    }
  }

  const handleLoadMore = () => {
    fetchCat()
  }

  useEffect(() => {
    handleLoadMore()
  }, [])

  return (
    <AppContainer>
      <Header />
      <Gallery>
        <CatCard url={cat} />
      </Gallery>
      <Button fetchCat={handleLoadMore} />
    </AppContainer>
  )
}

export default App
