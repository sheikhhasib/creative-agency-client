import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard/Dashboard';
import DashboardHeader from '../DashboardHeader/DashboardHeader';


const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([]);
    const [isStatus, setIsStatus] = useState(null);


    useEffect(() => {
        fetch('https://hidden-savannah-07241.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isStatus]);

    console.log(isStatus);

    const handleStatus = (id, status) => {
        const formData = new FormData()
        formData.append('status', status);

        fetch(`https://hidden-savannah-07241.herokuapp.com/orderUpdate/${id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result === true) {
                    setIsStatus(Math.floor(Math.random() * 11));
                }
            })
    }

    return (
        <div className="container-fluid">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <Dashboard></Dashboard>
                <div className="col-md-10 addService  p-3" style={{height: 'auto'}}>
                    <div className="row">
                        {
                            services == 0 && <div className="spring">

                                <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                                    <circle cx="170" cy="170" r="160" stroke="#E2007C" />
                                    <circle cx="170" cy="170" r="135" stroke="#404041" />
                                    <circle cx="170" cy="170" r="110" stroke="#E2007C" />
                                    <circle cx="170" cy="170" r="85" stroke="#404041" />
                                </svg>

                            </div>
                        }
                        <div className="container-fluid card m-4" style={{ borderRadius: '15px' }}>
                            <table className="table table-borderless table-responsive">
                                <thead>
                                    <tr style={{ borderTop: 'none' }}>
                                        <th scope="col">Sl.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Product Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        services.map((service, index) => <tr key={service._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{service.name}</td>
                                            <td>{service.email}</td>
                                            <td>{service.task}</td>
                                            <td>{service.productDetails}</td>
                                            <td>
                                                <ul className="navbar-nav mr-auto">
                                                    <li className="nav-item dropdown">
                                                        {
                                                            service.status === 'Pending' && <a className="nav-link dropdown-toggle" style={{ color: '#FF4545' }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                {service.status}
                                                            </a>
                                                        }
                                                        {
                                                            service.status === 'On going' && <a className="nav-link dropdown-toggle" style={{ color: '#FFBD3E' }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                {service.status}
                                                            </a>
                                                        }
                                                        {
                                                            service.status === 'Done' && <a className="nav-link dropdown-toggle" style={{ color: '#009444' }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                {service.status}
                                                            </a>
                                                        }

                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" onClick={() => handleStatus(service._id, 'Pending')} href="#">Pending</a>
                                                            <a className="dropdown-item" onClick={() => handleStatus(service._id, 'On going')} href="#">On going</a>
                                                            <a className="dropdown-item" onClick={() => handleStatus(service._id, 'Done')} href="#">Done</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;