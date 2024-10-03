import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import axios from '../../api/index'
import { AxiosResponse } from 'axios'
import { useState , useEffect } from 'react'
import { Root } from '../../types/index'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Home.css'
import { addLike, removeLike } from "../../redux/slice/likeSlice";

const Home = () => {
    const [products, setProducts] = useState<Root[]>([])
    const likedProducts = useSelector((state: any) => state.like.likedProducts);
  const dispatch = useDispatch() 

    useEffect(() => {
        const loadData = async () => {
            const response: AxiosResponse = await axios.get("/products");
            const data: Root[] = response.data.products;
            setProducts(data)
          }
    
          loadData()
    } , [])

   

    const toggleLike = (product: Root) => {
        if (likedProducts.some((likedProduct: Root) => likedProduct.id === product.id)) {
            dispatch(removeLike(product)); 
        } else {
            dispatch(addLike(product));
        }
    };

  return (
    <div>
        <div className="wrapper">
            {
                products.map((product : Root) =>
                    <div className="card" key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <Link className='btn' to={`/single/${product.id}`}>View Product</Link>
                        <button onClick={() => toggleLike(product)} className="like-btn">
                {likedProducts.some((likedProduct: Root) => likedProduct.id === product.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Home