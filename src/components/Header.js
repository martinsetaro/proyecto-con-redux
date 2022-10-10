import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div>
           <Link className='text-decoration-none' to="/"><h1>CRUD - React, Redux, REST API & Axios</h1></Link>
        </div>

        <Link to ="/producto/nuevo"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
         href="/producto/nuevo">Agregar Producto &#43;</Link>

    </nav>
  )
}

export default Header