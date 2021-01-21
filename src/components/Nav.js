import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="nav">
            <Link to='/'>About</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/work'>Experience&Education</Link>
            <Link to='/contact'>Contact</Link>
        </div>
     );
}
 
export default Nav;