// import product from '../image.js'
import product from '../image.js';
import items from '../image.js';
import { toast } from "react-toastify";


const Product = ({ array, setarray }) => {

  const add = (product) => {
    setarray([...array, product]);

    toast.dark("It's added to cart!", {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  const remove = (product) => {
    
    setarray((prevArray) => prevArray.filter((c) => c.id !== product.id));

    toast.dark("It's Removed from cart!", {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


































  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {
            items.map((product) =>
              <>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="cart-container">
                    <div className=" img d-flex justify-content-center">
                      <img src={product.img} alt='product' className="imagg" />
                    </div>
                    <h5 className="price">PRICE: <span>&#8377;</span>{product.price}</h5>



                    {array.some((c) => c.id === product.id) ? (<button className='btn btn-danger align-items-center' onClick={() => remove(product)}>Remove from Cart</button>)
                      :
                      (<button className='btn btn-dark align-item-center' onClick={() => add(product)}>Add to Cart</button>)

                    }
                  </div>


                </div>
              </>

            )}
        </div>
      </div>

    </div>
  )
}

export default Product
