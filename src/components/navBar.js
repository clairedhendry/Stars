import { Link } from 'react-router-dom';
import '../styles/navBar.css';

export default function NavBar() {
    return (
        <nav className="chapter-nav">
            <Link to="/chapter/stars">Stars</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
        </nav>
    )
}