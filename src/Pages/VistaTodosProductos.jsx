import Producto from '../Shared/Producto'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
const Titulo = styled.p`
  font-size: 4rem;
  text-align: center;
  font-weight: bolder;
  color: #e99401;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    align-content:space-between;
    justify-content:center;
    margin:50px;
    @media (max-width: 62rem) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap:1rem;
      margin: auto;
    }
      @media (max-width: 43rem) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
`

const VistaTodosProductos = ({ resultados }) => {
  return (
    <>
      <div><Titulo>Nuestros Productos</Titulo></div>
      <Container>
        {
        resultados.map(producto => (
          // eslint-disable-next-line react/jsx-key
          <Link to={`${producto._id}`} style={{ textDecoration: 'none' }}>
            <Producto
              key={producto._id}
              producto={producto}
              resultados={resultados}
            />
          </Link>
        ))
        }
      </Container>
    </>
  )
}

export default VistaTodosProductos
