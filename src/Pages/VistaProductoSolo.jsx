import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { ProductosApi } from '../Api/productosApi'
import ProductoSinImagen from '../assets/Images/producto-sin-imagen.png'

const Contenedor = styled.div`
  display:flex;
  margin: 30px 90px ;
`

const Images = styled.img`
  max-width:500px;
`
const ContDescripcion = styled.div`
  margin:4px 35px;
  text-align:justify;
`
const Name = styled.h3`
  text-align:center;
  text-transform: uppercase;
  font-weight:900;
  color:#e99401;
  font-size:3rem;
`
const Descripcion = styled.p`
  font-size:25px;
`
const Precio = styled.p`
  color: #e99401;
  font-size:60px;
  font-weight:900;
`
const Divbotones = styled.div`
  display:flex;
 
`
const Boton = styled.button`
    margin-right: 2rem;
    display: block;
    padding: 1rem 4rem;
    background-color:#FFF;
    border: 2px solid #e99401;
    text-align: center;
    font-size: 1rem;
    font-weight:bold; 
    text-transform: uppercase;
    transition: background-color .3s ease;
    &:hover{
    background-color: #e99401;
    color:#FFF;
    cursor: pointer;
    }
`

const VistaProductoSolo = () => {
  const [productoId, setProductoId] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await ProductosApi.get(`/api/v1/item/${id}`)
        setProductoId(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [id])

  return (
    <Contenedor>

      <div>
        {
        productoId.image
          ? <Images src={productoId.image} alt={productoId.product_name} />
          : <Images src={ProductoSinImagen} alt={productoId.product_name} /> &&
        productoId.images
            ? <Images src={productoId.images} alt={productoId.product_name} />
            : <Images src={ProductoSinImagen} alt={productoId.product_name} />
        }
      </div>
      <ContDescripcion>
        <Name>{productoId.product_name}</Name>
        <Descripcion>{productoId.description}</Descripcion>
        <Precio>${productoId.price}.00</Precio>
        <Divbotones>
          <Boton>Agregar al Carrito</Boton>
          <Boton>Comprar</Boton>
        </Divbotones>
      </ContDescripcion>
    </Contenedor>
  )
}

export default VistaProductoSolo
