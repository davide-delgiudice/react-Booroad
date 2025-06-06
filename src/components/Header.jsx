import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./src/image/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Bootstrap
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header