
import { useSelector, useDispatch } from 'react-redux'
import { removeLike } from "../../redux/slice/likeSlice";
import { Link } from 'react-router-dom'
import { Root } from '../../types/index'
import './Liked.css'

const Liked = () => {
    const likedProducts = useSelector((state: any) => state.like.likedProducts);
    const dispatch = useDispatch() 
  return (
    <div className='liked-container'>
        {
            likedProducts.map((product: Root) => 
                <div className='liked-product' key={product.id}>
                    <img src={product.thumbnail} alt="" />
                    <div className="liked-product-info">
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                    </div>
                    <button onClick={() => dispatch(removeLike(product))}>Unlike</button>
                    <Link to={`/single/${product.id}`}>View</Link>
                </div>
            )
        }
    </div>
  )
}

export default Liked