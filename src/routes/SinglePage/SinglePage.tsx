import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import axios from '../../api/index';
import { useState, useEffect } from 'react';
import { Root } from '../../types/index';
import { Link } from 'react-router-dom';
import './SinglePage.css';
import { useSelector, useDispatch } from 'react-redux'
import { addLike, removeLike } from "../../redux/slice/likeSlice";
import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 


const SinglePage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Root | null>(null);
    const likedProducts = useSelector((state: any) => state.like.likedProducts);
  const dispatch = useDispatch() 

    useEffect(() => {
        const loadData = async () => {
            const response: AxiosResponse = await axios.get(`/products/${id}`);
            const data: Root = response.data; 
            setProduct(data);
        };

        loadData();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const toggleLike = (product: Root) => {
        if (likedProducts.some((likedProduct: Root) => likedProduct.id === product.id)) {
            dispatch(removeLike(product)); 
        } else {
            dispatch(addLike(product));
        }
    };

    return (
        <div className="single-product">
            <img src={product.thumbnail} alt={product.title} />
            <div className="single-products-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>Price: ${product.price}</h2>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Stock: {product.stock}</p>
            <p>Rating: {product.rating} ★</p>
            <Link to="/" className='back-link'>Back to Home</Link>
            </div>
            <button onClick={() => toggleLike(product)} className="like-button">
                {likedProducts.some((likedProduct: Root) => likedProduct.id === product.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
        </div>
    );
};

export default SinglePage;
