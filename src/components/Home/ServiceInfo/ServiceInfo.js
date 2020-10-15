import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = ({ service,openModal }) => {
    return (
        <div className="col-md-4 col-sm-5 col-10 service-info text-center p-4">
            <img onMouseOver={openModal} src={`data:${service.image.contentType};base64,${service.image.img}`} style={{ width: "60px" }} alt="" />
            <h4 className="my-4">{service.serviceTitle}</h4>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceInfo;