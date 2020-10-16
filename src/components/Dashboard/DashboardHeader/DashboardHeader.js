import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const DashboardHeader = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container-fluid">
            <div className="row py-4 px-3">
                <div className="col-md-2">
                    <Link to="/" >
                        <img src={logo} width="100%" height="80px" alt="" />
                    </Link>
                </div>
                <div className="col-md-10">
                    <div className="row d-flex justify-content-between p-4">
                        <h2>{document.location.pathname}</h2>
                        <div className="row">
                            <img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '50px' }} alt="" />
                            <h2 className="ml-3">{loggedInUser.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;