import { useNavigate } from 'react-router-dom'
import './product.css'

function CardProduct({ producto }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
          <div className='card-product col-10 mb-3'>
            <h3 onClick={() => navigate(`/product/${producto.id}`)}>{producto.title}</h3>
            <img src={producto.images[0]} alt="" className='imagen-producto' />
            <p>{producto.description}</p>
            <strong>${producto.price}</strong>
        </div>
      </div>
    </>
  )
}

export default CardProduct;