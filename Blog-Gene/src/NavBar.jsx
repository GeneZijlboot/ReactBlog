import { Link } from 'react-router-dom';

function NavBar(){
    return ( 
        <nav className="navbar">
            <h1>The Gene Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;
