import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard/Dashboard';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([]);
    useEffect(() => {
        const formData = new FormData()
        formData.append('email', loggedInUser.email);
        fetch('https://hidden-savannah-07241.herokuapp.com/orders', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container-fluid">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <Dashboard></Dashboard>
                <div className="col-md-10 addService p-3">
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
                        {
                            services.map(service => <div key={service._id} className="col-md-5 card m-4" style={{ borderRadius: '15px' }}>
                                <div className="row p-4">
                                    <div>
                                        <img src={`data:${service.image.contentType};base64,${service.image.img}`} style={{ width: "60px" }} alt="" />
                                    </div>
                                    <div className="ml-auto">
                                        {
                                            service.status === 'Pending' && <button className="btn" style={{ color: '#FF4545', backgroundColor: '#FFE3E3' }}>{service.status}</button>
                                        }
                                        {
                                            service.status === 'On going' && <button className="btn" style={{ color: '#009444', backgroundColor: '#C6FFE0' }}>{service.status}</button>
                                        }
                                        {
                                            service.status === 'Done' && <button className="btn" style={{ color: '#009444', backgroundColor: '#C6FFE0' }}>{service.status}</button>
                                        }

                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3>{service.task}</h3>
                                    <p>{service.productDetails}</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;