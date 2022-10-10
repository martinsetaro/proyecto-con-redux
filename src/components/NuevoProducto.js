

const NuevoProducto = () => {
  return (
    <div className="row justify.content.center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weigth-bold">
                        Agregar Producto
                    </h2>
                    <form>
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="nombre producto"
                            name="nombre"
                           />
                           <label>Precio Producto</label>
                            <input
                            type="number"
                            className="form-control"
                            placeholder="nombre producto"
                            name="precio"
                           />

                        </div>
                        <button
                        type="submit"
                        className="btn btn-primary font-weigth-bold text-uppercase"
                        >Agregar</button>
                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default NuevoProducto