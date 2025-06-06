import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {/* <img src="" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
                        Bootstrap
                    </a>
                </div>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/travelpage">Travel</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header