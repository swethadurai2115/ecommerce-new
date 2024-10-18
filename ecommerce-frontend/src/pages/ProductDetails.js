import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ProductDetail({ cartItems, setCartItems }) {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  // Add 'id' as a dependency in the useEffect hook
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res.product))
      .catch((err) => console.error(err)); // Error handling in case the fetch fails
  }, [id]); // Include 'id' in the dependency array

  function addToCart() {
    // Use strict equality (===) for comparisons
    const itemExist = cartItems.find((item) => item.product._id === product._id);
    if (!itemExist) {
      const newItem = { product, qty };
      setCartItems((state) => [...state, newItem]);
      toast.success('Cart Item added successfully!');
    } else {
      toast.info('Product is already in the cart.');
    }
  }

  function increaseQty() {
    if (qty < product?.stock) {
      setQty((prevQty) => prevQty + 1);
    }
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  }

  return (
    product && (
      <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img
              src={product?.images[0]?.image}
              alt={product?.name}
              height="500"
              width="500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/default-image.jpg'; // Fallback in case image fails
              }}
            />
          </div>

          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">Product #{product._id}</p>

            <hr />
  
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>

            <hr />

            <p id="product_price">${Number(product.price).toFixed(2)}</p>

            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus" onClick={decreaseQty}>
                -
              </span>

              <input
                type="number"
                className="form-control count d-inline"
                value={qty}
                readOnly
              />

              <span className="btn btn-primary plus" onClick={increaseQty}>
                +
              </span>
            </div>
            <button
              type="button"
              onClick={addToCart}
              disabled={product.stock === 0} // Use strict equality (===) here
              id="cart_btn"
              className="btn btn-primary d-inline ml-4"
            >
              Add to Cart
            </button>

            <hr />

            <p>
              Status:{' '}
              <span
                id="stock_status"
                className={product.stock > 0 ? 'text-success' : 'text-danger'}
              >
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>

            <div className="rating w-50"></div>
          </div>
        </div>
      </div>
    )
  );
}
