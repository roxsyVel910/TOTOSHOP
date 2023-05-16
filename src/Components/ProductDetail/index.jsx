
const ProductDetail = () => {

    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="ruta/a/imagen-del-producto.jpg" className="img-fluid" alt="Producto"></img>
          </div>
          <div className="col-md-6">
           
            <h2>Nombre del producto</h2>
            <p>Descripción del producto.</p>
            <h3>Precio: </h3>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
      

    );
}
export default ProductDetail