import React from 'react'
import styled from '@emotion/styled'
import ProductoSinImagen from '../assets/Images/producto-sin-imagen.png'

const Card = styled.div`
    max-width:245px;
    height:360px;
    padding: 20px;
    font-size: 30px;
    /* box-shadow: 0 0 7px #111; */
    color:black;
    margin-bottom:70px;
`
const Imag = styled.img`
  display:block;
  max-height: 200px;
  margin:auto;
  min-width:200px;
  width:100%
`
const Name = styled.h3`
  text-align:center;
  margin-top:30px;
  margin-bottom:10px;
  font-size: 20px;
  font-weight:bold;
`
const ContenedorPrecio = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  align-content: center;
  justify-content: space-around;
`
const Precio = styled.p`
  color: #e99401;
  font-weight:bolder;
`
const Boton = styled.button`
   display: block;
    padding: 1rem 3rem;
    background-color:#FFF;
    border: 2px solid #e99401;
    text-align: center;
    font-size: .8rem;
    font-weight:bold; 
    text-transform: uppercase;
    transition: background-color .3s ease;
    &:hover{
    background-color: #e99401;
    color:#FFF;
    cursor: pointer;
    }
`
const Producto = ({ producto }) => {
  return (
    <>

      <Card>
        {
          /* revisar logica */
          producto.image
            ? <Imag src={producto.image} alt={producto.product_name} />
            : <Imag src={ProductoSinImagen} alt={producto.product_name} /> &&
          producto.images
              ? <Imag src={producto.images} alt={producto.product_name} />
              : <Imag src={ProductoSinImagen} alt={producto.product_name} />
        }

        <div>
          <Name>{producto.product_name}</Name>
        </div>
        <ContenedorPrecio>
          <Precio> $ {producto.price}.00</Precio>
          <Boton>Ver el producto</Boton>
        </ContenedorPrecio>
      </Card>
    </>
  )
}

export default Producto
