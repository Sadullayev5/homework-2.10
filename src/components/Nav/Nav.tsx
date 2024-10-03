
import { AiFillHeart } from "react-icons/ai"; 
import { Link } from "react-router-dom" 
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link title="Liked products" to="/liked"><AiFillHeart /></Link></li>
        </ul>
    </nav>
  )
}

export default Nav