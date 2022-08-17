import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { FaDice, FaShoppingCart } from 'react-icons/fa'

const Nav = styled.nav`
  background-color: #e99401;
  width:92.5%;
  height:100px;
  padding:20px 50px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const Input = styled.input`
  width:100%;
  font-size:16px;
  padding: 14px;
  border-radius:10px;
  border:none;
  margin-right:50px;
`
const DivInput = styled.div`
  display:flex;
  align-items:center;
`
const Home = styled.p`
  padding-right:55px;
  color:white;
  font-size:25px;
`

const NavBar = ({ placeholder, busqueda, handleChange }) => {
  return (
    <Nav>

      <FaDice style={{ color: 'white', fontSize: '80px' }} />
      <DivInput>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Home>Home</Home>
        </Link>
        <Input
          type='text'
          placeholder={placeholder}
          value={busqueda}
          onChange={handleChange}
        />
        <FaShoppingCart style={{ color: 'white', fontSize: '65px' }} />
      </DivInput>
    </Nav>
  )
}

export default NavBar
