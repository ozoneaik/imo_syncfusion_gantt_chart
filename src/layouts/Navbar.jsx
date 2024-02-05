import {Link} from "react-router-dom";
import LogoImo from '../assets/logo/LogoImo.svg'
import user from '../assets/icons/user.svg'
import avartar from '../assets/logo/Avatar.png'
import '../assets/css/navbar.css'

function Navbar({navHeade}) {

    const userStyle = {
        right: 0,
        height: '100%',
        backgroundColor: "#2A529C",
        borderRadius: '12px 0px 0px 12px'
    }

    return (
        <nav className="navbar navbar-expand-lg bg-warning position-relative" style={{height: 60}}>
            <div className="container-fluid">
                <Link className="navbar-brand mx-5" to="#">
                    <img src={LogoImo} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold menu-show" aria-current="page" to="#"
                                  style={{color: '#2A529C'}}>
                                <i className="fa-solid fa-bars"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" aria-current="page" to="#"
                                  style={{color: '#2A529C'}}>{navHeade}</Link>
                        </li>
                    </ul>
                </div>
                <div className={'user text-end'}>
                    <img src={user} alt=""/>
                </div>
            </div>

            <div className={'position-absolute p-3 d-flex align-items-center justify-content-around'} style={userStyle}>
                <div className={'me-3'}>
                    <img src={avartar} alt="no image"/>
                </div>
                <div className={'text-light'}>
                    <p className={'m-0'}>Phuwadech Panichayasopa</p>
                    <p className={'m-0'}>ID: E0012GK01</p>
                </div>
                <div className={'ms-3 text-light dropstart'}>
                    <div type={'button'} className={'rounded-circle d-flex justify-content-center align-items-center'}
                         style={{height: 30, width: 30, background: '#0069d2'}}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>



            </div>
        </nav>
    );
}

export default Navbar;