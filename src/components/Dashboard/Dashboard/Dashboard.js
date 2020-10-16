import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserCog, faList, faLock, faCartPlus, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import './Dashboard.css'
import { UserContext } from '../../../App';
import { useEffect } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(null);
    
    useEffect(() => {
        const formData = new FormData()
        formData.append('email', loggedInUser.email);
        fetch('https://hidden-savannah-07241.herokuapp.com/isAdmin', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])

    return (
        <>
            {
                document.location.pathname == "/dashboard" && <DashboardHeader></DashboardHeader> 
            }
            <div className="col-md-2 px-4 py-2" >
                <div className="pl-3">
                    {
                        admin === true && <div>
                            <div className="mt-5">
                                <Link to="/serviceList" className="text-decoration-none  textDark"><FontAwesomeIcon icon={faLock} /> Service List</Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/addService" className="text-decoration-none  textDark"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/makeAdmin" className="text-decoration-none  textDark"><FontAwesomeIcon icon={faUserCog} /> Make Admin </Link>
                            </div>
                        </div>
                    }
                    {
                        admin === false && <div>
                            <div className="mt-4">
                                <Link to="/order" className="text-decoration-none  textDark"><FontAwesomeIcon icon={faCartPlus} /> Order</Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/orderList" className="text-decoration-none  textDark"><FontAwesomeIcon icon={faList} /> Order List</Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/review" className="text-decoration-none  textDark"><FontAwesomeIcon icon={faCommentAlt} /> Review </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Dashboard;