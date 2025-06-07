import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                    <div className="d-flex align-items-center">
                        <img src="./src/assets/image/logo2.png" alt="Logo" className="d-inline-block align-text-top dim-logo" />
                        <span className="p-2 text-white fs-3">BOOLROAD</span>
                    </div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header