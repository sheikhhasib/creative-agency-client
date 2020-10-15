import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import Animation from '../Animation/Animation';
import ServiceInfo from '../ServiceInfo/ServiceInfo';


const Services = () => {
    const [services, setServices] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        fetch('https://hidden-savannah-07241.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    function openModal() {
        setIsOpen(true);
    }

    return (

        <div className="col-md-10 m-auto">
            <div style={{ paddingBottom: '100px' }}>
                <div style={{ marginTop: '150px' }}>
                    <h2 className="text-center">Provide awesome <span className="textBrand">services</span></h2>
                </div>
                <Animation modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}></Animation>
                <div className="d-flex justify-content-center">
                    <Link to="/dashboard" className="text-decoration-none text-dark">
                        <div className="row d-flex justify-content-center my-5">
                            {
                                services.map(service => <ServiceInfo key={service._id} openModal={openModal} service={service}></ServiceInfo>)
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Services;