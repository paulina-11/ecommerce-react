import { useState } from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Shared/NavBar'
import VistaProductoSolo from './Pages/VistaProductoSolo'
import NotFound from './Pages/NotFound'
function App () {
  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }
  let resultados = []
  if (!busqueda) {
    resultados = productos
  } else {
    resultados = productos.filter((dato) => dato.product_name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
  }

  return (
    <div>
      <NavBar
        placeholder='Busca tu producto'
        handleChange={handleChange}
        busqueda={busqueda}
      />
      <Routes>
        <Route
          path='/' element={
            <Home
              setProductos={setProductos}
              resultados={resultados}
            />
          }
        />
        <Route
          path=':id' element={
            <VistaProductoSolo
              setProductos={setProductos}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
