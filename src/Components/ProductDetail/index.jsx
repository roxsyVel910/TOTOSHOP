import { uniqueProduct } from "../Context/ApiFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css'

function ProductDetail() {
  const [productito, setProductito] = useState(null);
  const params = useParams();
  useEffect(() => {
    uniqueProduct(params.id, setProductito);
  }, []);

  return (
    <>
      <section>
        {productito != null ? (
          <div className="productito">
            <img className="imagen-principal" src={productito.images[0]} />
            <strong>{productito.title}</strong>
            <strong>${productito.price}</strong>
            <p>{productito.description}</p>

            {productito.images.length >= 4 ? (
              <div className="imagenes-adicionales">
                <img src={productito.images[1]} alt={productito.title} className="imagen-adicional"/>
                <img src={productito.images[2]} alt={productito.title} className="imagen-adicional"/>
                <img src={productito.images[3]} alt={productito.title} className="imagen-adicional"/>
              </div>
            ) : null}
          </div>
        ) : (
          "Loading"
        )}
      </section>
    </>
  );
}

export default ProductDetail;