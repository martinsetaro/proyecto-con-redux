import { Route,Routes } from "react-router-dom"
import Productos from "./components/Productos"
import NuevoProducto from "./components/NuevoProducto"
import EditarProducto from "./components/EditarProducto"

const Container = () => {
  return (
    <main>
    <Routes>
    <Route path="/" element={<Productos/>}/>
    <Route path='/producto/nuevo'element={<NuevoProducto/>}/>
    <Route path='/producto/editar/:id'element={<EditarProducto/>}/>
    </Routes>
    
    </main>
  )
}

export default Container