import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";


const ProductTemplate = ({product}) => {

    const dispatch = useDispatch();
      const users = useSelector((state) => state.userReducer.users);
  const AddtoCartHandler = (product) => {
      const copyuser = { ...users, cart: [...users.cart] };
      const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);
  
      if (x == -1) {
        copyuser.cart.push({ product, quantity: 1 });
      } else {
        copyuser.cart[x] = {
          product,
          quantity: copyuser.cart[x].quantity + 1,
        };
      }
      console.log(copyuser);
  
      dispatch(asyncupdateuser(copyuser.id, copyuser));
    };
  return (
<div
        className="bg-white mt-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 
                   w-[260px] flex flex-col overflow-hidden"
        key={product.id}
      >
        <img
          className="w-full h-[180px] object-contain bg-gray-50 p-4"
          src={product.image}
        />

        <div className="flex flex-col flex-grow px-4 pb-4">
          <h1 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
            {product.title}
          </h1>

          <small className="text-xs text-gray-500 line-clamp-3 mb-3">
            {product.description.slice(0, 100)}...
          </small>

          <div className="mt-auto flex justify-between items-center">
            <p className="text-sm font-medium text-gray-900">
              ₹{product.price}
            </p>

            <button
              onClick={() => AddtoCartHandler(product)}
              className="text-xs px-3 py-1.5 rounded-full border border-gray-300 
                         hover:bg-gray-900 hover:text-white transition-colors"
            >
              Add to cart
            </button>
          </div>

          <Link
            className="text-xs text-gray-500 hover:text-gray-900 mt-3 self-start"
            to={`/product/${product.id}`}
          >
            More Info →
          </Link>
        </div>
      </div>  )
}

export default ProductTemplate