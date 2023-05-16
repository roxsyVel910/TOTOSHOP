import Logo from '../imagenes/Logo.svg';
import primero from '../imagenes/primero.jpg';
import segundo from '../imagenes/segundo.jpg';
import tercero from '../imagenes/tercero.jpg';
import './Header.css'

export const Header = () => {
    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} className='logo' alt='' style={{ width: '90px' }} />
                    </a>
                    <form className="d-flex" role="search">
                        <button className="btn btn-light" type="submit">Login</button>
                        <button className="btn btn-light mx-3" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg></button>
                    </form>
                </div>
            </nav>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={primero} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={segundo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={tercero} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}