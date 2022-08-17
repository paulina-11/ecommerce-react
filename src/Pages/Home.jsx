import { useEffect, useState } from 'react'
import { ProductosApi } from '../Api/productosApi'
import VistaTodosProductos from './VistaTodosProductos'
import styled from '@emotion/styled'
import ReactLoading from 'react-loading'

const Load = styled.div`
  margin-top:15%;
  display:flex;
  justify-content: center;
  align-items: center;

`

const Home = ({ setProductos, resultados }) => {
  const [loading, setLoading] = useState(true)

  const getProductosData = async () => {
    try {
      setLoading(true)
      const res = await ProductosApi.get('/api/v1/item')
      setProductos(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductosData()
  }, [])

  const Example = ({ type, color }) => (
    <ReactLoading type='cubes' color='#e99401' height='10%' width='10%' />
  )

  return (
    <div>
      {loading
        ? <Load><Example /></Load>
        : (
          <VistaTodosProductos
            resultados={resultados}
          />
          )}

    </div>
  )
}

export default Home
